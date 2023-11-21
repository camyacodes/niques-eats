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

// export const QUERY_PRODUCT = gql`
//   query products($id: ID!) {
//     products(_id: $id) {
//       _id
//       name
//       description
//       price
//       image
//       category {
//         _id
//       }
//     }
//   }
// `;

// export const QUERY_ALL_PRODUCTS = gql`
//   {
//     products {
//       _id
//       name
//       description
//       price
//       category {
//         name
//       }
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

// export const QUERY_USERS = gql`
//   {
//     users {
//       _id
//       username
//       email
//     }
//   }
// `;
// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//     }
//   }
// `;

// export const QUERY_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//     }
//   }
// `;

// export const QUERY_ORDERS = gql`
//   {
//     orders {
//       _id
//       address
//       address2
//       email
//       firstName
//       city
//       state
//       lastName
//       phone
//       zipCode
//       purchaseDate
//       products
//       total
//     }
//   }
// `;

// export const QUERY_CHECKOUT = gql`
// query getCheckout {
//   checkout() {
//     session
//   }
// }
// `;
