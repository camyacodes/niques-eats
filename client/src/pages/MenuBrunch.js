import React from "react";

import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "../styles/menus.css";

import CategoryMenuBrunch from "../components/CategoryMenuBrunch";
import Cart from "../components/Cart";
import BrunchDishes from "../components/BrunchDishes";

const MenuBrunch = () => {
  return (
    <div>
      <Cart />

      <div id="title">
        <span>MENU </span>
      </div>

      <div id="menu-tabs">
        <Row>
          <Col sm="6">
            <h3 id="active-tab">BRUNCH</h3>
          </Col>
          <Col sm="6">
            <Link to="/menu/dinner">
              <h3 id="not-active-tab">DINNER</h3>
            </Link>
          </Col>
        </Row>
      </div>

      <div id="brunch-background">
        <div id="brunch">
          <div id="nav-buttons-container" className="container">
            <CategoryMenuBrunch />
          </div>

          <div id="brunch-dishes">
            <BrunchDishes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBrunch;
