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

  type Category {
    _id: ID
    dishType: String
    servingTime: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
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
    products: [Product]
    total: String
  }

  type Query {
    products(category: ID): [Product]
    categories: [Category]
    orders(username: String): [Order]
    users: [User]
  }
`;

// export the typedefs
module.exports = typeDefs;
