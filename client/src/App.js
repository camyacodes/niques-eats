import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import SocialButtons from "./components/Social-buttons";
import MenuBrunch from "./pages/MenuBrunch";
import MenuDinner from "./pages/MenuDinner";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import Checkout from "./pages/Checkout";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client} id="content">
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <StoreProvider>
            <Header />
            <SocialButtons />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/menu" element={<MenuBrunch />} />
                <Route path="/menu/dinner" element={<MenuDinner />} />
                <Route path="/orderHistory" element={<OrderHistory />} />
                <Route path="/success" element={<Success />} />
                <Route path="/checkout" element={<Checkout />} />

                <Route path="*" element={<NoMatch />} />
              </Routes>
            </div>
          </StoreProvider>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
