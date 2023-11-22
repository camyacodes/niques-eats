import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DISHTYPES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_DISHTYPES, UPDATE_CURRENT_DISHTYPE } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Col, Row, Container } from "reactstrap";
import "./style.css";

function CategoryMenuBrunch() {
  const [state, dispatch] = useStoreContext();

  const { dishTypes } = state;

  const { loading, data: dishTypeData } = useQuery(QUERY_DISHTYPES);

  useEffect(() => {
    if (dishTypeData && dishTypeData.dishTypes) {
      dispatch({
        type: UPDATE_DISHTYPES,
        dishTypes: dishTypeData.dishTypes,
      });

      dishTypeData.dishTypes.forEach((dishType) => {
        idbPromise("dishTypes", "put", dishType);
      });
    } else if (!loading) {
      // since we're offline, get all of the data from the `dishTypes` store
      idbPromise("dishTypes", "get").then((dishTypes) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_DISHTYPES,
          dishTypes: dishTypes,
        });
      });
    }
  }, [dishTypeData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_DISHTYPE,
      currentDishType: id,
    });
  };
  return (
    <Container>
      <Row>
        <Col>
          {dishTypes.map((item) => (
            <button
              className="menu-nav-buttons"
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

export default CategoryMenuBrunch;
