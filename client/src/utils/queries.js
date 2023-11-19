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
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;
