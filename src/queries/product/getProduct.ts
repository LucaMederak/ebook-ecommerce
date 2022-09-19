import { useQuery } from "@apollo/client";
import { ProductQuery } from "./product.query";
import { IProductData, IProductQuery } from "./product.interfaces";
import { IProduct } from "@/interfaces/products.interfaces";

export const GetProduct = (slug: string) => {
  const { data, error, loading } = useQuery<IProductQuery>(ProductQuery, {
    variables: { slug },
  });

  const productData = data?.productsCollection.items[0];

  if (!productData) {
    return {
      product: undefined,
      productLoading: !productData && !error,
      productError: error,
    };
  }

  const product: IProduct = {
    id: productData.sys.id,
    title: productData.title,
    slug: productData.slug,
    shortDescription: productData.shortDescription,
    price: productData.price,
    salePrice: productData.salePrice,
    description: productData?.description?.json,
    category: {
      id: productData.category?.sys.id,
      name: productData.category?.name,
    },
    subCategory: {
      id: productData.subCategory?.sys.id,
      name: productData.subCategory?.name,
    },
    img: {
      id: productData.image.sys.id,
      url: productData.image.url,
    },
    gallery: productData.galleryCollection.items.map((galleryImage) => ({
      id: galleryImage.sys.id,
      url: galleryImage.url,
    })),
  };

  return {
    product,
    productLoading: !product && !error,
    productError: error,
  };
};
