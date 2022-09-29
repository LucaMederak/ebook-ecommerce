import type { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET);
import { Stripe } from "stripe";
import { contentfulClient } from "@/utils/contentfulClient";

interface IOrderItem {
  id: string;
  quantity: number;
}

interface IReqStripeOrder extends NextApiRequest {
  body: {
    cartItems: IOrderItem[];
  };
}

type IImageField = {
  title: string;
  file: {
    url: string;
  };
};

interface IImage {
  sys: {
    id: string;
  };
  fields: IImageField;
}

interface EntryProductCollection {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    price: number;
    salePrice?: number;
    shortDescription: string;
    image: IImage;
  };
}

const stripeOrder = async (req: IReqStripeOrder, res: NextApiResponse) => {
  console.log("stripe order");
  const { cartItems } = req.body;

  console.log(cartItems);

  if (!cartItems?.length) {
    return res.status(400).json({ msg: "Brak produktów" });
  }

  //price check
  const products = await Promise.all(
    cartItems.map(async (cartItem) => {
      const product: EntryProductCollection = await contentfulClient.getEntry(
        cartItem.id
      );

      console.log({ product });

      const productPrice = product.fields.salePrice || product.fields.price;

      const productObj = {
        id: product.sys.id,
        name: product.fields.title,
        shortDescription: product.fields.shortDescription,
        image: "https:" + product.fields.image.fields.file.url,
        regularPrice: product.fields.price,
        salePrice: product.fields.salePrice || undefined,
        price: productPrice,
        quantity: cartItem.quantity,
      };

      return productObj;
    })
  );

  console.log({ products });

  if (!products?.length) {
    return res.status(500).json({
      msg: "Wystąpił błąd podczas pobierania danych produktów, spróbuj ponownie później",
    });
  }

  const totalPrice = products.reduce((acc, item) => acc + item.price, 0);

  const sessionLineItems = products.map((product) => ({
    price_data: {
      currency: "PLN",
      unit_amount: product.price * 100,
      product_data: {
        name: product.name,
        description: product.shortDescription,
        images: [product.image],
      },
    },
    quantity: product.quantity,
  }));

  console.log({ sessionLineItems });

  const session: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      success_url: "https://ebook-ecommerce-difr.vercel.app",
      cancel_url: "https://ebook-ecommerce-difr.vercel.app",
      payment_method_types: ["card", "p24"],
      line_items: sessionLineItems,
      mode: "payment",
    });

  console.log({ session });

  if (!session) {
    return res.status(400).json({
      msg: "Wystąpił problem z generowaniem sesji stripe, spróbuj ponownie później",
    });
  }

  return res.status(200).json({ sessionId: session.id });
};

export default stripeOrder;
