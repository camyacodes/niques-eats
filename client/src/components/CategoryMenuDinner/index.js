import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DISHTYPES } from "../../utils/queries";
import { UPDATE_DISHTYPES, UPDATE_CURRENT_DISHTYPE } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import { Col, Row, Container } from "reactstrap";
import "./style.css";

function CategoryMenuDinner({}) {
  const [state, dispatch] = useStoreContext();

  const { dishTypes } = state;

  const { data: dishTypeData } = useQuery(QUERY_DISHTYPES);

  useEffect(() => {
    if (dishTypeData && dishTypeData.dishTypes) {
      dispatch({
        type: UPDATE_DISHTYPES,
        dishTypes: dishTypeData.dishTypes,
      });

      dishTypeData.dishTypes.forEach((dishType) => {
        idbPromise("dishTypes", "put", dishType);
      });
    }
  }, [dishTypeData, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_DISHTYPE,
      currentDishType: id,
    });
  };
  return (
    <Container>
      <Row id="nav-buttons-row">
        <Col>
          {dishTypes.map((item) => (
            <button
              className="menu-nav-buttons-dinner"
              key={item._id}
              onClick={() => {
                handleClick(item._id);
              }}
            >
              {item.name + "s"}
            </button>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryMenuDinner;
