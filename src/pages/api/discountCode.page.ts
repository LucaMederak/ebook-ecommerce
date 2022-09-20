// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { parseISO, format, isWithinInterval } from "date-fns";
import { contentfulClient } from "@/utils/contentfulClient";
import { EntryCollection } from "contentful";

interface IReqDiscountCode extends NextApiRequest {
  body: {
    discountCodeName: string;
    productsId: string[];
  };
}

interface EntryDiscountCodeCollection {
  name: string;
  amount: number;
  category: {
    sys: {
      id: string;
    };
    fields: {
      name: string;
      dateStart: Date;
      dateEnd: Date;
      procent: number;
      allProducts: boolean;
      products?: {
        sys: {
          id: string;
        };
        fields: {
          name: string;
        };
      }[];
    };
  };
}

const discountCode = async (req: IReqDiscountCode, res: NextApiResponse) => {
  if (req.method == "POST") {
    const { discountCodeName, productsId } = req.body;

    if (!discountCodeName || productsId.length < 1) {
      return res
        .status(400)
        .json({ msg: "Nie podano kodu rabatowego lub nie wybrano produktów" });
    }

    //get code
    const discountCodes: EntryCollection<EntryDiscountCodeCollection> =
      await contentfulClient.getEntries({
        content_type: "discountCode",
      });

    if (!discountCodes) {
      return res.status(400).json({ msg: "Nie znaleziono kodów rabatowych" });
    }

    const currentCode = discountCodes.items.find(
      ({ sys, fields }) => fields.name === discountCodeName
    );

    if (!currentCode) {
      console.log("Nie znaleziono kodu rabatowego");
      return res.status(400).json({ msg: "Nie znaleziono kodu rabatowego" });
    }

    const validDiscountCode = discountCodeValidation(currentCode.fields);

    if (!validDiscountCode) {
      return res.status(400).json({ msg: "Kod rabatowy nieaktywny" });
    }

    const discountCodeProducts = getDiscountCodeProducts(
      currentCode.fields,
      productsId
    );

    const discountCodeObj = {
      name: currentCode.fields.name,
      valid:
        discountCodeProducts.allProducts ||
        discountCodeProducts.products.length > 0,
      procent: currentCode.fields.category.fields.procent,
      allProducts: discountCodeProducts.allProducts,
      products: discountCodeProducts.products,
    };

    res.status(200).json(discountCodeObj);
  } else {
    res.status(400).json({ msg: "Only POST method allowed" });
  }
};

const getDiscountCodeProducts = (
  currentDiscountCode: EntryDiscountCodeCollection,
  productsId: string[]
) => {
  const discountCodeAllProducts =
    currentDiscountCode.category.fields.allProducts;

  if (discountCodeAllProducts)
    return {
      allProducts: true,
      products: [],
    };

  const discountCodeProducts = currentDiscountCode.category.fields.products;

  const validProducts = productsId.map((productId) => {
    const product = discountCodeProducts?.find(
      ({ sys, fields }) => sys.id === productId
    );
    return product;
  });

  const products = validProducts.filter((item) => item !== undefined);

  return {
    allProducts: false,
    products,
  };
};

const discountCodeValidation = (
  currentDiscountCode: EntryDiscountCodeCollection
) => {
  //date
  const currentDate = new Date();
  const discountCodeStart = new Date(
    currentDiscountCode.category.fields.dateStart
  );
  const discountCodeEnd = new Date(currentDiscountCode.category.fields.dateEnd);

  const checkCorrectDate = dateDiscountAvailable(
    currentDate,
    discountCodeStart,
    discountCodeEnd
  );

  if (!checkCorrectDate) {
    console.log("Nieaktywny kod rabatowy (data)");
    return false;
  }

  //amount
  const correctAmount = currentDiscountCode.amount !== 0;
  if (!correctAmount) {
    console.log("Nieaktywny kod rabatowy (ilość)");
    return false;
  }

  return true;
};

const dateDiscountAvailable = (
  currentDate: Date,
  dateStart: Date,
  dateEnd: Date
) => {
  const dateCorrect = isWithinInterval(currentDate, {
    start: dateStart,
    end: dateEnd,
  }); //correct

  return dateCorrect;
};

export default discountCode;
