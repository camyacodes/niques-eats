import React from "react";
import "../CheckoutCartItem/style.css";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CheckoutCartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;

    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });

      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });

      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col cart-card">
            <div className="date">
              <div id="date-text">{new Date(item.date).toDateString()}</div>
            </div>
            <div className="d-flex justify-content-between items">
              <div className="item">{item.name}</div>
              <p className="item">${item.price}</p>
            </div>
            <div className="item">
              <span>Qty:</span>
              <input
                id="quantity"
                type="number"
                placeholder="1"
                value={item.purchaseQuantity}
                onChange={onChange}
              />{" "}
              <span
                role="img"
                aria-label="trash"
                onClick={() => removeFromCart(item)}
              >
                🗑️
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
