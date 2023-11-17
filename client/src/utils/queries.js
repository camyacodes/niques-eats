import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query products($category: ID) {
    products(category: $category) {
      _id
      name
      description
      image
      price
      category {
        _id
        dishType
        servingTime
      }
    }
  }
`;
