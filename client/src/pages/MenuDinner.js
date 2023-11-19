import React from "react";
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

import ProductList from "../components/ProductList";
import CategoryMenuDinner from "../components/CategoryMenuDinner";
import Cart from "../components/Cart";
import DinnerDishes from "../components/DinnerDishes";

const MenuDinner = () => {
  return (
    <div id="dinner-menu">
      <Cart />
      <div id="title">
        <span>MENU </span>
      </div>

      <div id="menu-tabs">
        <Row>
          <Col sm="6">
            <Link to="/menu">
              <h3 id="not-active-tab">BRUNCH</h3>
            </Link>
          </Col>
          <Col sm="6">
            <h3 id="active-tab">DINNER</h3>
          </Col>
        </Row>
      </div>

      <div id="dinner-background">
        <div id="dinner">
          <div id="nav-buttons-container" className="container">
            <CategoryMenuDinner />
          </div>

          <div id="dinner-dishes">
            {/* <ProductList /> */}
            <DinnerDishes />
          </div>
        </div>

        {/* <div id="scroll-to-top" className ="footer">
  <a href="#title"> <h4>Scroll To Top ^</h4> </a>
  </div> */}
      </div>
    </div>
  );
};

export default MenuDinner;
