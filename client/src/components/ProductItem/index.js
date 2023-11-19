import React, { useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
} from "reactstrap";
import "./style.css";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";

function ProductItem({ products }) {
  // const { image, name, _id, price, description } = item;

  // const [state, dispatch] = useStoreContext();
  // const [deliveryDate, setDeliveryDate] = useState(null);

  // const { cart } = state;

  // const addToCart = () => {
  // 	const itemInCart = cart.find((cartItem) => cartItem._id === _id);
  // 	if (itemInCart) {
  // 		dispatch({
  // 			type: UPDATE_CART_QUANTITY,
  // 			_id: _id,
  // 			purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
  // 		});
  // 		idbPromise("cart", "put", {
  // 			...itemInCart,
  // 			purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
  // 			date: deliveryDate,
  // 		});
  // 	} else {
  // 		dispatch({
  // 			type: ADD_TO_CART,
  // 			product: { ...item, purchaseQuantity: 1, date: deliveryDate },
  // 		});
  // 		idbPromise("cart", "put", {
  // 			...item,
  // 			purchaseQuantity: 1,
  // 			date: deliveryDate,
  // 		});
  // 		console.log(itemInCart);
  // 	}
  // };

  // Calendar functions
  // function onDateChange (e) {
  //   setDeliveryDate(e.target.value)
  //   console.log(deliverDate)
  // }

  // function onDateChange(e) {
  // 	const deliverDate = e["_d"];

  // 	setDeliveryDate(deliverDate);
  // }

  // var valid = function (current) {
  // 	const start = moment().add(3, "days");
  // 	const end = moment().add(10, "days");
  // 	return moment(current).isBetween(start, end);
  // };
  if (!products.length) {
    return <h3>Check back later for our update menu!</h3>;
  }
  return (
    <div>
      {products &&
        products.map((product) => (
          <Container
            className="themed-container p-5"
            fluid={true}
            id="dish-card"
            key={product._id}
          >
            <Col key={product._id}>
              <Card id="dish-card-content">
                <div>
                  <CardImg
                    top
                    width="100%"
                    src={`/images/${product.image}`}
                    alt={product.name}
                    id="dish-img"
                    className="rounded mx-auto d-block"
                  />
                </div>

                <CardBody>
                  <div className="row">
                    <CardTitle tag="h5" className="col " id="card-text">
                      {product.name}
                    </CardTitle>
                    <CardSubtitle
                      tag="h5"
                      className="col text-end"
                      id="card-text"
                    >
                      ${product.price}
                    </CardSubtitle>
                  </div>
                  <div id="card-btn">
                    <button
                      type="button"
                      className="btn btn-primary add-to-cart"
                    >
                      Add to Cart
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Container>
        ))}
    </div>
  );
}

export default ProductItem;
