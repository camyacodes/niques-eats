import React, { useEffect } from "react";
import "../checkout-info/style.css";
import { useStoreContext } from "../../utils/GlobalState";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../../utils/mutations";
import { ADD_MULTIPLE_TO_CART, CLEAR_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
// import { QUERY_CHECKOUT } from "../../utils/queries";
// import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import spinner from "../../assets/spinner.gif";
import { useState } from "react";

// const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function CheckoutInfo() {
  const flState = "Florida";

  const flCity = "Orlando";
  const [addOrder] = useMutation(ADD_ORDER);
  const loading = 1;
  // const [getCheckout, { loading, data }] = useLazyQuery(QUERY_CHECKOUT);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "Orlando",
    state: "Florida",
    zipCode: "",
    email: "",
    phone: "",
  });
  const [state, dispatch] = useStoreContext();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch, state.cart]);

  // console.log(state.cart)
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  console.log(state.cart);

  const submitCheckout = async () => {
    // console.log({
    // 	form: {
    // 		...formData,
    // 		flCity,
    // 		flState,
    // 	},
    // 	products: state.cart,
    // });

    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    const order = {
      ...formData,
      products: productIds,
      total: calculateTotal(),
    };
    // console.log(order)

    const { data } = await addOrder({
      variables: { ...order },
    });

    dispatch({
      type: CLEAR_CART,
    });

    idbPromise("cart", "clear");

    // getCheckout({
    // 	variables: { products: productIds },
    // });

    // window.location.assign("/success");
  };

  // useEffect(() => {
  // 	async function saveOrder() {
  // 		const cart = await idbPromise("cart", "get");
  // 		const products = cart.map((item) => item._id);

  // 		if (products.length) {
  // 			const { data } = await addOrder({ variables: { products } });
  // 			const productData = data.addOrder.products;

  // 			productData.forEach((item) => {
  // 				idbPromise("cart", "delete", item);
  // 			});
  // 		}

  // 		setTimeout(() => {
  // 			window.location.assign("/");
  // 		}, 3000);
  // 	}

  // 	saveOrder();
  // }, [addOrder]);

  return (
    <div className="col-2">
      {/* container start */}
      <div className="container">
        {/* whole column begin */}
        <div className="row">
          {/* Only column begin */}
          <div className="col">
            {/* Header */}

            {/* buttons */}
            <p className="delivery-info">Delivery Info:</p>
          </div>
          {/* only column end */}
        </div>
        {/* ^ whole column end */}
        {/* FORM COlumn start */}
        <div className="container" id="delivery-form">
          <div className="row row mt-5">
            {/* first name */}
            <div className="col padding-left">
              <input
                type="text"
                className="form-control"
                id="form-input-area"
                placeholder="First name*"
                aria-label="First name"
                name="firstName"
                onChange={handleChange}
              />
            </div>
            {/* last name */}
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="form-input-area"
                placeholder="Last name*"
                aria-label="Last name"
                onChange={handleChange}
                name="lastName"
              />
            </div>
          </div>
          {/* Address row pt.1*/}
          <div className="row mt-3">
            {/* Address */}
            <div className="col-9 padding-left">
              <input
                type="text"
                className="form-control"
                id="form-input-area"
                placeholder="Address*"
                aria-label="Address"
                onChange={handleChange}
                name="address"
              />
            </div>
            {/* APT */}
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="form-input-area"
                placeholder="Apt, suite, etc."
                aria-label="Apt"
                onChange={handleChange}
                name="address2"
              />
            </div>
          </div>
          {/* Address row pt.2  */}
          <div className="row mt-3">
            {/* City */}
            <div className="col-5 padding-left">
              <input
                className="form-control"
                id="form-input-area-disable"
                type="text"
                placeholder={flCity}
                aria-label={flCity}
                disabled
              />
            </div>
            {/* state */}
            <div className="col">
              <input
                className="form-control"
                type="text"
                id="form-input-area-disable"
                placeholder={flState}
                aria-label={flState}
                disabled
              />
            </div>
            {/* zip code */}
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="form-input-area"
                placeholder="Zip Code*"
                aria-label="Zip Code"
                onChange={handleChange}
                name="zipCode"
              />
            </div>
          </div>
          {/* Email/Phone */}
          <div className="row mt-3">
            {/* email */}
            <div className="col-8 padding-left">
              <input
                type="text"
                className="form-control"
                id="form-input-area"
                placeholder="Email*"
                aria-label="Email"
                onChange={handleChange}
                name="email"
              />
            </div>
            {/* phone */}
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="form-input-area"
                placeholder="Phone Number*"
                aria-label="Phone Number"
                onChange={handleChange}
                name="phone"
              />
            </div>
          </div>
          {/* Payment */}
          <div className="row mt-5">
            <div className="col d-flex justify-content-center">
              <p>*Payment will be collected during time of delivery</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col d-flex justify-content-center">
              {loading ? (
                <img src={spinner} alt="loading" id="spinner" />
              ) : null}
              <a href="/success">
                <button
                  type="button"
                  className="cont-btn"
                  onClick={submitCheckout}
                >
                  PLACE ORDER
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* form column end */}
      </div>
      {/* ^ containder end */}
    </div>
  );
}
