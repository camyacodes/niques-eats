import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query products($servingTime: ID, $dishType: ID) {
    products(servingTime: $servingTime, dishType: $dishType) {
      _id
      name
      description
      image
      price
      dishType {
        _id
        name
      }
      servingTime {
        _id
        name
      }
    }
  }
`;

export const QUERY_SERVINGTIMES = gql`
  query servingTimes($name: String) {
    servingTimes(name: $name) {
      _id
      name
    }
  }
`;

export const QUERY_DISHTYPES = gql`
  query dishTypes($name: String) {
    dishTypes(name: $name) {
      _id
      name
    }
  }
`;

export const QUERY_LOGGEDINUSER = gql`
  {
    loggedInUser {
      _id
      username
      email
      orders {
        _id
        firstName
        lastName
        address
        address2
        city
        state
        zipCode
        email
        phone
        purchaseDate
        total
      }
    }
  }
`;
