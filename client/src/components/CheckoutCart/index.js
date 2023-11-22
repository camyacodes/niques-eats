import React from "react";
import CheckoutCartItem from "../CheckoutCartItem";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";

const CheckoutCart = () => {
  const [state, dispatch] = useStoreContext();

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  return (
    <div className="col-1" id="checkout-summary">
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CheckoutCartItem key={item._id} item={item} />
          ))}
          <div className="container">
            <div className="row total">
              <div className="col">Total:</div>
              <div className="col">
                <p className="text-end">${calculateTotal()}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default CheckoutCart;
