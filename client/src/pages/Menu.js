import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";

const Menu = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  console.log(products);
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">{/* PRINT THOUGHT LIST */}</div>
      </div>
    </main>
  );
};

export default Menu;