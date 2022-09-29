import { gql } from "@apollo/client";

export const ProductsQuery = gql`
  query {
    productsCollection {
      items {
        sys {
          id
        }
        title
        slug
        price
        salePrice
        shortDescription
        category {
          sys {
            id
          }
          name
        }
        image {
          sys {
            id
          }
          url
        }
        galleryCollection {
          items {
            sys {
              id
            }
            url
          }
        }
      }
    }
  }
`;
