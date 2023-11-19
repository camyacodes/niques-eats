import React, {useContext} from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import './style.css'

const CartItem = ({ item }) => {
    const [, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
          type: REMOVE_FROM_CART,
          _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
      };

    const onChange = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatch({
              type: REMOVE_FROM_CART,
              _id: item._id
            });
          
            idbPromise('cart', 'delete', { ...item });
          } else {
            dispatch({
              type: UPDATE_CART_QUANTITY,
              _id: item._id,
              date: item.date,
              purchaseQuantity: parseInt(value)
            });
          
            idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
          }
    };



    return (
        <div className="flex-row">
            <div>
                <div id="date">{new Date(item.date).toDateString()}</div>
                <img
                    src={`/images/${item.image}`}
                    alt=""
                    id="image"
                />
            </div>
            <div>
                <div>{item.name}, ${item.price}</div>
                <div>
                    <span>Qty:</span>
                    <input
                        type="number"
                        placeholder="1"
                        value={item.purchaseQuantity}
                        onChange={onChange}
                        id="quantity"
                    />
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
    );
}

export default CartItem;