// CONNECT FRONT END TO BACK END USING APOLLO CLIENT
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
// PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory";
import NoMatch from "./pages/NoMatch";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
// everything between the JSX Apollo Provider tags will eventually have access to the server's API data through the client we set up
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orderhistory" element={<OrderHistory />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
