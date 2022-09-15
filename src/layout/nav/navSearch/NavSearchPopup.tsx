import React from "react";
import Image from "next/image";

//assets
import SearchResult from "@/assets/search-result.svg";

//styles
import * as Styled from "./NavSearchPopup.styles";

//components
import IconButton from "@/components/iconButton/IconButton";

//icons
import { FaSearch, FaTimes, FaCartPlus } from "@/icons/icons";

//interfaces
import { Search } from "./NavSearch.helpers";

interface ISearch {
  data: Search;
  setSearchData: (value: string) => void;
}

const NavSearchPopup = ({ data, setSearchData }: ISearch) => {
  const price = false;
  return (
    <Styled.SearchPopupWrapper>
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
        data.map(({ name, type, image, id }) => (
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
                  <h2>20 zł</h2>
                  <IconButton>
                    <FaCartPlus />
                  </IconButton>
                </Styled.Price>
              )}

              <IconButton variant="info" onClick={() => console.log("search")}>
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