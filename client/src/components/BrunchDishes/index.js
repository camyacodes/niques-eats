import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import ProductItem from "../ProductItem";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { QUERY_SERVINGTIMES } from "../../utils/queries";
import spinner from "../../assets/spinner.gif";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_PRODUCTS,
  UPDATE_SERVINGTIMES,
  UPDATE_CURRENT_SERVINGTIME,
} from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useProductReducer } from "../../utils/reducers";
import { Row, Container, Col } from "reactstrap";

const ProductList = () => {
  const [state, dispatch] = useStoreContext();

  const { servingTimes, currentDishType, currentServingTime } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const { data: servingTimeData } = useQuery(QUERY_SERVINGTIMES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (servingTimeData) {
      dispatch({
        type: UPDATE_SERVINGTIMES,
        servingTimes: servingTimeData.servingTimes,
      });

      // Find the "Brunch" serving time and set it as the default
      const brunchServingTime = servingTimeData.servingTimes.find(
        (item) => item.name === "Brunch"
      );

      if (brunchServingTime) {
        dispatch({
          type: UPDATE_CURRENT_SERVINGTIME,
          currentServingTime: brunchServingTime._id,
        });
      }
    }
  }, [servingTimeData, dispatch]);

  function filterProducts() {
    if (!currentDishType) {
      return state.products.filter(
        (product) => product.servingTime._id === currentServingTime
      );
    }

    return state.products.filter(
      (product) =>
        product.servingTime._id === currentServingTime &&
        product.dishType._id === currentDishType
    );
  }

  return (
    <Container>
      {state.products.length ? (
        <Row md="3" sm="2" xs="2">
          {filterProducts().map((product) => (
            <Col>
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <h3>Check back later for our update menu!</h3>
      )}
      {loading ? <div>Loading...</div> : null}
    </Container>
  );
  // const [state, dispatch] = useStoreContext();

  // const { currentCategory } = state;

  // const { loading, data } = useQuery(QUERY_PRODUCTS);

  // const products = data?.products || [];

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
  // if (!products.length) {
  //   return <h3>Check back later for our update menu!</h3>;
  // }
  // return (
  //   <div>
  //     <Row>
  //       {loading ? <div>Loading...</div> : <ProductItem products={products} />}
  //     </Row>
  //   </div>
  // );
};

export default ProductList;
