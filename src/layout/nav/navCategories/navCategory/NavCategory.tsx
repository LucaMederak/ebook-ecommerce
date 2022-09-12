import { useState } from "react";
import Link from "next/link";

//hooks
import { usePageBlur } from "@/context/PageBlur";
import SubCategoriesPopup from "../popup/SubCategoriesPopup";

//styles
import * as Styled from "./NavCategory.styles";

//interfaces
import { INavCategory } from "./NavCategory.interfaces";
import { AnimatePresence } from "framer-motion";

const NavCategory = ({ category, categoryId }: INavCategory) => {
  const [categoryPopup, setCategoryPopup] = useState(false);
  const { showPageBlur, deletePageBlur } = usePageBlur();

  const handlePopup = () => {
    if (categoryPopup) {
      setCategoryPopup(false);
      deletePageBlur();
    } else {
      setCategoryPopup(true);
      showPageBlur();
    }
  };
  return (
    <>
      <Styled.NavCategoryItem
        onMouseEnter={handlePopup}
        onMouseLeave={handlePopup}
        active={categoryPopup}
      >
        <Link href={`/kategorie/${category.slug}`}>
          <a className="link">{category.name}</a>
        </Link>
        {/* <AnimatePresence>
          {categoryPopup && (
            <SubCategoriesPopup categoryId={categoryId} category={category} />
          )}
        </AnimatePresence> */}
      </Styled.NavCategoryItem>
    </>
  );
};

export default NavCategory;
