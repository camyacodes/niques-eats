import React, { useEffect } from "react";
import "../PaymentBtn/style.css";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
const PaymentBtn = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <div>
      <button onClick={submitCheckout}>Checkout</button>
    </div>
  );
};

export default PaymentBtn;
