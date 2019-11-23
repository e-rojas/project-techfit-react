import React, { Fragment } from "react";
import { Row, Col, Button } from "react-bootstrap";
const MealCard = () => {
  return (
    <Fragment>
      <Row className="border pt-4 pb-4 rounded">
        <Col lg={6}>
          <img
            style={{ height: "200px" }}
            className="img-fluid img-thumbnail"
            src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
            alt="food"
          />
        </Col>
        <Col lg={6}>
          <h5>Roasted Chicken</h5>
          <p>
            Most Made Today. Cheesy Broccoli-Stuffed Chicken Breasts. Chicken
            Parmesan. 2K. Slow Cooker Chicken Taco Soup. 5K. Rosemary-Roasted
            Chicken with Apples and… Jalapeno Cream Cheese Chicken Enchiladas.
            294. Juicy Roasted Chicken. 3K. Greek Lemon Chicken and Potatoes.
            543. Buffalo Chicken Dip. 4K.
          </p>
          <div className="d-flex flex-row justify-content-between">
            <span>
              <i class="far fa-clock"></i> : 10 minutes
            </span>
            <span>
              <i class="fas fa-users"></i> : 5 persons
            </span>
            <Button variant="info" size="sm">
              Add <i class="far fa-plus-square"></i>
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default MealCard;
