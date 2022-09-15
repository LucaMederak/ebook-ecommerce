import { gql } from "@apollo/client";

export const SliderItemsQuery = gql`
  query {
    sliderCollection {
      items {
        sys {
          id
        }
        name
        link
        description
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
