const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    orders: [Order]
  }

  type DishType {
    _id: ID
    name: String
  }
  type ServingTime {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    dishType: DishType
    servingTime: ServingTime
  }

  type Order {
    _id: ID
    username: String
    firstName: String
    lastName: String
    address: String
    address2: String
    city: String
    state: String
    zipCode: String
    email: String
    phone: String
    purchaseDate: String
    total: String
  }

  type Query {
    products(dishType: String, servingTime: String): [Product]
    dishTypes(name: String): [DishType]
    servingTimes(name: String): [ServingTime]
    orders(username: String): [Order]
    users(username: String): [User]
    loggedInUser: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(
      firstName: String
      lastName: String
      address: String
      address2: String
      city: String
      state: String
      zipCode: String
      email: String
      phone: String
      total: String
    ): Order
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typedefs
module.exports = typeDefs;
