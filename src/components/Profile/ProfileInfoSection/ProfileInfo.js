import React from "react";
import {
  Row,
  Col,
  Button,
  Accordion,
  Card,
  ButtonToolbar
} from "react-bootstrap";
import { Link } from "react-router-dom";
const imageStyle = { height: "100px", width: "100px", marginBottom: "40px" };

const ProfileInfo = () => {
  return (
    <Row
      style={{ marginTop: "100px", borderBottom: "1px solid black" }}
      className="p-5 text-center"
    >
      <Col lg={2}>
        <img src="images/profle-pic.png" alt="Profile" style={imageStyle}></img>
        <h3>First Last</h3>
      </Col>
      <Col lg={4}>
        <Accordion>
          <Card style={{ backgroundColor: "white! important" }}>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                style={{ color: "black" }}
              >
                User Information
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Information Form</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
      <Col lg={3}></Col>
      <Col lg={3} style={{ textAlign: "right" }}>
        <ButtonToolbar>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to="/meal-plan"
          >
            {" "}
            <Button
              variant="secondary"
              size="sm"
              style={{ marginRight: "15px", height: "50px", width: "100px" }}
            >
              Meal Plan
            </Button>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to="/fitness-plan"
          >
            {" "}
            <Button
              variant="outline-secondary"
              size="sm"
              style={{ marginRight: "15px", height: "50px", width: "100px" }}
            >
              Fitness Plan
            </Button>
          </Link>
        </ButtonToolbar>
      </Col>
    </Row>
  );
};

export default ProfileInfo;
