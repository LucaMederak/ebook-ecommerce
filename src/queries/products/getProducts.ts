import { useQuery } from "@apollo/client";
import { ProductsQuery } from "./products.query";
import { IProductsQuery } from "./products.interfaces";
import { IProduct } from "@/interfaces/products.interfaces";

export const GetProducts = () => {
  const { data, error, loading } = useQuery<IProductsQuery>(ProductsQuery);

  const products = data?.productsCollection.items.map((productData) => {
    const product: Omit<IProduct, "description"> = {
      id: productData.sys.id,
      title: productData.title,
      slug: productData.slug,
      shortDescription: productData.shortDescription,
      price: productData.price,
      salePrice: productData.salePrice,
      category: {
        id: productData.category?.sys.id,
        name: productData.category?.name,
      },
      // subCategory: {
      //   id: productData.subCategory?.sys.id,
      //   name: productData.subCategory?.name,
      // },
      img: {
        id: productData.image.sys.id,
        url: productData.image.url,
      },
    };

    return product;
  }) as IProduct[];

  return {
    products,
    productsLoading: !products && !error,
    productsError: error,
  };
};
