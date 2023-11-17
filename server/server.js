const express = require("express");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;

//create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  Create a new instance of an Apollo server with the GraphQl schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Api server running on port ${PORT}!`);
      // log where we can go to test our gql api
      console.log(
        `Use Graphql at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
