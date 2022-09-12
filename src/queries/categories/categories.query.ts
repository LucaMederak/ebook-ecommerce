import { gql } from "@apollo/client";

export const CategoriesQuery = gql`
  query {
    categoriesCollection {
      items {
        sys {
          id
        }
        name
        slug
        shortDescription
        image {
          sys {
            id
          }
          url
        }
      }
    }
  }
`;
