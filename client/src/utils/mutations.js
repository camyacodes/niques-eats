import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder(
    $firstName: String!
    $lastName: String!
    $address: String!
    $address2: String!
    $city: String!
    $state: String!
    $zipCode: String!
    $email: String!
    $phone: String!
    $total: String!
  ) {
    addOrder(
      firstName: $firstName
      lastName: $lastName
      address: $address
      address2: $address2
      city: $city
      state: $state
      zipCode: $zipCode
      email: $email
      phone: $phone
      total: $total
    ) {
      _id
      username
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
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem(
    $name: String!
    $price: Int
    $image: String!
    $description: String!
    $deliverDate: String!
  ) {
    addItem(
      name: $name
      price: $price
      image: $image
      description: $description
    ) {
      _id
      name
      description
      price
    }
  }
`;
