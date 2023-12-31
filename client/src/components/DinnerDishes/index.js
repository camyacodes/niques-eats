import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import ProductItem from "../ProductItem";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { QUERY_SERVINGTIMES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_PRODUCTS,
  UPDATE_SERVINGTIMES,
  UPDATE_CURRENT_SERVINGTIME,
} from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Row, Container, Col } from "reactstrap";

const ProductList = () => {
  const [state, dispatch] = useStoreContext();

  const { currentDishType, currentServingTime } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const { data: servingTimeData } = useQuery(QUERY_SERVINGTIMES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
      // add else if to check if `loading` is undefined in `useQuery()` Hook
    } else if (!loading) {
      // since we're offline, get all of the data from the `products` store
      idbPromise("products", "get").then((products) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  useEffect(() => {
    if (servingTimeData && servingTimeData.servingTimes) {
      dispatch({
        type: UPDATE_SERVINGTIMES,
        servingTimes: servingTimeData.servingTimes,
      });

      servingTimeData.servingTimes.forEach((servingTime) => {
        idbPromise("servingTimes", "put", servingTime);
      });
    }
  }, [servingTimeData, loading, dispatch]);

  useEffect(() => {
    if (servingTimeData && servingTimeData.servingTimes) {
      dispatch({
        type: UPDATE_SERVINGTIMES,
        servingTimes: servingTimeData.servingTimes,
      });

      servingTimeData.servingTimes.forEach((servingTime) => {
        idbPromise("servingTimes", "put", servingTime);
      });
    }
  }, [servingTimeData, loading, dispatch]);

  useEffect(() => {
    if (servingTimeData && servingTimeData.servingTimes) {
      const dinnerServingTime = servingTimeData.servingTimes.find(
        (item) => item.name === "Dinner"
      );

      if (dinnerServingTime) {
        dispatch({
          type: UPDATE_CURRENT_SERVINGTIME,
          currentServingTime: dinnerServingTime._id,
        });
      } else if (!loading) {
        idbPromise("servingTimes", "get").then((servingTimes) => {
          // Check if dinnerServingTime is still undefined
          const updatedDinnerServingTime = servingTimes.find(
            (item) => item.name === "Dinner"
          );

          dispatch({
            type: UPDATE_CURRENT_SERVINGTIME,
            currentServingTime: updatedDinnerServingTime
              ? updatedDinnerServingTime._id
              : null, // Use null or some default value if not found
          });
        });
      }
    }
  }, [servingTimeData, loading, dispatch]);
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
        <h3>Tasty meals coming right up!...</h3>
      )}
    </Container>
  );
};

export default ProductList;
