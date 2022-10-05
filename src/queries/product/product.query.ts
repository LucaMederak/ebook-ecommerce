import { gql } from "@apollo/client";

export const ProductQuery = gql`
  query GetProduct($slug: String!) {
    productsCollection(where: { slug: $slug }) {
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
