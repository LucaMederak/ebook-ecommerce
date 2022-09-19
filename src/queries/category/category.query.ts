import { gql } from "@apollo/client";

export const CategoryQuery = gql`
  query GetCategory($slug: String!) {
    categoriesCollection(where: { slug: $slug }) {
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
