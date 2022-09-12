import React from "react";
import Link from "next/link";

//styles
import * as Styled from "./SubCategoriesPopup.styles";

//apollo
import { GetSubCategories } from "@/queries/subCategories/getSubCategories";

//interfaces
import { INavCategory } from "../navCategory/NavCategory.interfaces";

//components
import Image from "next/image";
import SkeletonLoading from "@/components/loading/skeleton/skeleton";

const SubCategoriesPopup = ({ categoryId, category }: INavCategory) => {
  const { subCategories, subCategoriesError, subCategoriesLoading } =
    GetSubCategories(categoryId);

  if (subCategoriesLoading)
    return (
      <Styled.SubCategoriesPopupWrapper>
        <SkeletonLoading />
      </Styled.SubCategoriesPopupWrapper>
    );
  if (subCategoriesError)
    return (
      <Styled.SubCategoriesPopupWrapper>
        error...
      </Styled.SubCategoriesPopupWrapper>
    );

  console.log({ subCategories, category });

  return (
    <Styled.SubCategoriesPopupWrapper>
      <Styled.AllListWrapper>
        {/* {subCategories.length < 1 && (
          <Styled.SubCategoriesListWrapper>
            <h1>{category.name}</h1>

            {category.products.data.slice(0, 4).map(({ id, attributes }) => (
              <li key={id}>{attributes.name}</li>
            ))}

            <Link href="/kategorie">
              <a className="more_info">wszystkie</a>
            </Link>
          </Styled.SubCategoriesListWrapper>
        )} */}

        {subCategories.length > 0 &&
          subCategories.slice(0, 6).map((subCategory) => (
            <Styled.SubCategoriesListWrapper key={subCategory.id}>
              <h1>{subCategory.name}</h1>
            </Styled.SubCategoriesListWrapper>
          ))}
      </Styled.AllListWrapper>

      <Image
        alt={category.name}
        src={category.img.url}
        width={200}
        height={100}
        objectFit="contain"
      />
    </Styled.SubCategoriesPopupWrapper>
  );
};

export default SubCategoriesPopup;

{
  /* {attributes.products.data
                .slice(0, 4)
                .map(({ id, attributes: product }) => (
                  <Styled.ListItem key={id}>
                    <Link href={`produkty/${product.slug}`}>
                      <a>{product.name}</a>
                    </Link>
                  </Styled.ListItem>
                ))} */
}
{
  /* <Link href={`kategorie/${attributes.slug}`}>
                <a className="more_info">wszystkie</a>
              </Link> */
}

// import React from "react";
// import { INavCategory } from "../navCategory/NavCategory.interfaces";

// const SubCategoriesPopup = ({ categoryId, category }: INavCategory) => {
//   return <div>SubCategoriesPopup</div>;
// };

// export default SubCategoriesPopup;
