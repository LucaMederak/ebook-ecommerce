import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//assets
import SearchResult from "@/assets/search-result.svg";

//styles
import * as Styled from "./NavSearchPopup.styles";

//components
import IconButton from "@/components/iconButton/IconButton";

//icons
import { FaSearch, FaTimes, FaCartPlus } from "@/icons/icons";

//interfaces
import { ISearchData, Search } from "./NavSearch.helpers";

interface ISearch {
  data: Search;
  setSearchData: (value: string) => void;
}

const NavSearchPopup = ({ data, setSearchData }: ISearch) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        document.body.style.overflowY = "visible";
        setSearchData("");
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const navigateToItemPage = (
    itemType: ISearchData["type"],
    itemSlug: ISearchData["slug"]
  ) => {
    if (itemType === "kategoria") {
      return router.push(`/kategorie/${itemSlug}`);
    }

    return router.push(`/produkt/${itemSlug}`);
  };

  return (
    <Styled.SearchPopupWrapper ref={modalRef}>
      {data.length === 0 && (
        <Styled.BrakingSearchResultWrapper>
          <h2>Brak wyników</h2>
          <Image
            width={100}
            height={100}
            src={SearchResult}
            alt="search-result"
          />
        </Styled.BrakingSearchResultWrapper>
      )}

      {data.length > 0 &&
        data.map(({ name, type, image, id, slug, price }) => (
          <Styled.DataItemProductInfoWrapper key={id}>
            <Styled.ItemWrapper>
              <Styled.ImageWrapper>
                {image && (
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    alt="search"
                  />
                )}
              </Styled.ImageWrapper>
              <Styled.DataItemProductInfo>
                <span>{type}</span>
                <h1>{name}</h1>
              </Styled.DataItemProductInfo>
            </Styled.ItemWrapper>

            <Styled.DataItemProductActions>
              {price && (
                <Styled.Price>
                  <h2>{price} zł</h2>
                  {/* <IconButton>
                    <FaCartPlus />
                  </IconButton> */}
                </Styled.Price>
              )}

              <IconButton
                variant="info"
                onClick={() => navigateToItemPage(type, slug)}
              >
                <FaSearch />
              </IconButton>
            </Styled.DataItemProductActions>
          </Styled.DataItemProductInfoWrapper>
        ))}
      <Styled.ClosePopup onClick={() => setSearchData("")}>
        <FaTimes />
      </Styled.ClosePopup>
    </Styled.SearchPopupWrapper>
  );
};

export default NavSearchPopup;
