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

  const { data: dishTypeData } = useQuery(QUERY_DISHTYPES);

  useEffect(() => {
    if (dishTypeData) {
      dispatch({
        type: UPDATE_DISHTYPES,
        dishTypes: dishTypeData.dishTypes,
      });
    }
  }, [dishTypeData, dispatch]);

  // return <div>Hi</div>;
  // const [state, dispatch] = useStoreContext();
  // const { categories } = state;
  // const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  // useEffect(() => {
  //   // if categoryData exists or has changed from the response of useQuery, then run dispatch()
  //   if (categoryData) {
  //     // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
  //     dispatch({
  //       type: UPDATE_CATEGORIES,
  //       categories: categoryData.categories,
  //     });
  //     categoryData.categories.forEach((category) => {
  //       idbPromise("categories", "put", category);
  //     });
  //   } else if (!loading) {
  //     idbPromise("categories", "get").then((categories) => {
  //       dispatch({
  //         type: UPDATE_CATEGORIES,
  //         categories: categories,
  //       });
  //     });
  //   }
  // }, [categoryData, dispatch, loading]);
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
