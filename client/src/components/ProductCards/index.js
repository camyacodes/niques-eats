import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
} from "reactstrap";

const ProductCards = ({ products }) => {
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
            <Col>
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
};

export default ProductCards;
