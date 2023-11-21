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
  Row,
} from "reactstrap";
import "./style.css";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";

function ProductItem(item) {
  const { image, name, _id, price, description } = item;

  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };
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
  // if (!length) {
  //   return <h3>Check back later for our update menu!</h3>;
  // }
  return (
    <div>
      <Row>
        <Container
          className="themed-container"
          fluid={true}
          id="dish-card"
          key={_id}
        >
          <Col key={_id}>
            <Card id="dish-card-content">
              <div>
                <CardImg
                  top
                  width="100%"
                  src={`/images/${image}`}
                  alt={name}
                  id="dish-img"
                  className="rounded mx-auto d-block"
                />
              </div>

              <CardBody>
                <div className="row">
                  <CardTitle tag="h5" className="col " id="card-text">
                    {name}
                  </CardTitle>
                  <CardSubtitle
                    tag="h5"
                    className="col text-end"
                    id="card-text"
                  >
                    ${price}
                  </CardSubtitle>
                </div>
                <div id="card-btn">
                  <button
                    type="button"
                    className="btn btn-primary add-to-cart"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal${_id}`}
                    // onClick={addToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </Row>

      <div
        className="modal fade"
        id={`modal${_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body row">
              <CardImg
                top
                width="100%"
                src={`/images/${image}`}
                alt={name}
                id="dish-img-nav"
                className="rounded mx-auto d-block col"
              />
              <h6 className="col" id="description">
                {description}
              </h6>
              <div className="row align-items-center">
                <CardTitle tag="h5" className="col text-start" id="name">
                  {name}
                </CardTitle>
                <CardSubtitle tag="h5" className="col text-end" id="price">
                  ${price}
                </CardSubtitle>
              </div>
            </div>

            <div className="modal-footer">
              <Datetime
                value={"Choose a Date"}
                timeFormat={false}
                // isValidDate={valid}
                // onChange={onDateChange}
              />
              <button
                type="button"
                className="add-to-cart"
                id="modal-btn"
                data-bs-dismiss="modal"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
