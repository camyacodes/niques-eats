import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
// import { QUERY_CATEGORIES } from '../../utils/queries';
import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { Col, Row } from "reactstrap";
import "./style.css";

function CategoryMenuDinner({}) {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

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
  // }, [categoryData, dispatch]);

  // const handleClick = (id) => {
  //   dispatch({
  //     type: UPDATE_CURRENT_CATEGORY,
  //     currentCategory: id,
  //   });
  // };

  return (
    <Row id="nav-buttons-row">
      <Col>
        {categories.map(
          (item) =>
            // below is the way to ask the app to ignore these item in category list
            item.name === "Main Dishes" ||
            item.name === "Sides" ||
            item.name === "Drinks" || (
              <button
                className="menu-nav-buttons-dinner"
                key={item._id}
                // onClick={() => {
                //   handleClick(item._id);
                // }}
              >
                {item.name}
              </button>
            )
        )}
      </Col>
    </Row>
  );
}

export default CategoryMenuDinner;
