// CONNECT FRONT END TO BACK END USING APOLLO CLIENT
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import React from "react";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
// PAGES
import Menu from "./pages/Menu";

const httpLink = createHttpLink({
  uri: "http://localhost:27017/graphql",
});

const client = new ApolloClient({
  uri: "/graphql",
});
// everything between the JSX Apollo Provider tags will eventually have access to the server's API data through the client we set up
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Menu />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
