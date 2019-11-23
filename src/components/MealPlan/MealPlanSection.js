import React from 'react';
import { Row, Col, Button, Form } from "react-bootstrap";
import MealCard from '../MealPlan/MealCard'
const MealPlanSection = () => {
    const rowStyle = { minHeight: "300px",margin:'200px 0px' };
    return (
        <Row style={rowStyle} className=" p-4">
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
          lg={6}
          className=""
        >
          <header>
            <h1>Meal Plan Search</h1>
          </header>

          <Form style={{ minWidth: "600px" }}>
            <Form.Group >
              <Form.Label>Type Ingredients*</Form.Label>
              <Form.Control type="text" placeholder="Ingredients" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                width: "100%",
                marginTop: "50px",
                filter: "grayscale(100%)"
              }}
              variant="dark"
            >
              Search
            </Button>
            <Form.Text className="text-muted">
            
            </Form.Text>
          </Form>
        </Col>
        <Col
          lg={6}
          className=" d-flex flex-column "
        >
          <h1>Meals List Display</h1>
          <div>
           <MealCard />
           
          </div>
        </Col>
      </Row>
    );
}

export default MealPlanSection;
