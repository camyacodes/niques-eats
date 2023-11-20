import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_PRODUCTS } from "../utils/queries";
import { QUERY_SERVINGTIMES } from "../utils/queries";
import {
  UPDATE_SERVINGTIMES,
  UPDATE_CURRENT_SERVINGTIME,
} from "../utils/actions";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
} from "reactstrap";
import "../styles/menus.css";

import ProductItem from "../components/ProductItem";
// import ProductList from "../components/ProductList";
import CategoryMenuBrunch from "../components/CategoryMenuBrunch";
import Cart from "../components/Cart";
import BrunchDishes from "../components/BrunchDishes";
import { useQuery } from "@apollo/client";

const MenuBrunch = () => {
  const [state, dispatch] = useStoreContext();
  const { servingTimes } = state;
  const { data: servingTimeData } = useQuery(QUERY_SERVINGTIMES);
  // const { loading, data } = useQuery(QUERY_PRODUCTS);
  // const products = data?.products || [];
  useEffect(() => {
    if (servingTimeData) {
      dispatch({
        type: UPDATE_SERVINGTIMES,
        servingTimes: servingTimeData.servingTimes,
      });
    }
  }, [servingTimeData, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_SERVINGTIME,
      currentServingTime: id,
    });
  };

  return (
    <div>
      <Cart />

      <div id="title">
        <span>MENU </span>
      </div>

      <div id="menu-tabs">
        <Row>
          {servingTimes.map((item) => (
            <Col sm="6">
              <h3
                id="active-tab"
                key={item._id}
                onClick={() => {
                  handleClick(item._id);
                }}
              >
                {item.name}
              </h3>
            </Col>
          ))}

          {/* <Col sm="6">
            <h3 id="active-tab">BRUNCH</h3>
          </Col>
          <Col sm="6">
            <Link to="/menu/dinner">
              <h3 id="not-active-tab">DINNER</h3>
            </Link>
          </Col> */}
        </Row>
      </div>

      <div id="brunch-background">
        <div id="brunch">
          <div id="nav-buttons-container" className="container">
            <CategoryMenuBrunch />
          </div>

          <div id="brunch-dishes">
            {/* <ProductList /> */}
            <BrunchDishes />
            {/* <ProductItem products={products} /> */}
          </div>
        </div>

        {/* <div id="scroll-to-top" className ="footer">
  <a href="#title"> <h4>Scroll To Top ^</h4> </a>
  </div> */}
      </div>
    </div>
  );
};

export default MenuBrunch;
