import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import ProductItem from "../ProductItem";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { QUERY_SERVINGTIMES } from "../../utils/queries";
import spinner from "../../assets/spinner.gif";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useProductReducer } from "../../utils/reducers";
import { Row } from "reactstrap";

const ProductList = () => {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];

  //   useEffect(() => {
  //     if (data) {
  //       dispatch({
  //         type: UPDATE_PRODUCTS,
  //         products: data.products,
  //       });

  //       data.products.forEach((products) => {
  //         idbPromise("products", "put", products);
  //       });
  //       // add else if to check if `loading` is undefined in `useQuery()` Hook
  //     } else if (!loading) {
  //       // since we're offline, get all of the data from the `products` store
  //       idbPromise("products", "get").then((products) => {
  //         // use retrieved data to set global state for offline browsing
  //         dispatch({
  //           type: UPDATE_PRODUCTS,
  //           products: products,
  //         });
  //       });
  //     }
  //   }, [data, loading, dispatch]);

  //   function filterProducts() {
  //     const products = product;
  //     return products;
  //     // const products = product.filter((products) => products.menu === "dinner");
  //     // if (!currentCategory) {
  //     //   return state.products;
  //     // }
  //     // return state.products.filter(
  //     //   (products) => products.category._id === currentCategory
  //     // );
  //   }
  if (!products.length) {
    return <h3>Check back later for our update menu!</h3>;
  }
  return (
    <div>
      <Row>
        {loading ? <div>Loading...</div> : <ProductItem products={products} />}
      </Row>
    </div>
  );
};

export default ProductList;
