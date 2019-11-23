import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";

const login = () => {
  return (
    <Row
      style={{ marginTop: "200px", marginBottom: "200px" }}
      className="p-4  d-flex justify-content-center "
    >
      <Col style={{ maxWidth: "600px" }} lg={12} >
        <Form style={{ minWidth: "600px" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              width: "100%",
              marginTop: "50px",
              filter: "grayscale(100%)"
            }}
          >
            Login
          </Button>
          <Form.Text className="text-muted mt-4">
            <span> Don't have an account? </span>
            <Link to="/register">Sign Up!</Link>.
          </Form.Text>
        </Form>
      </Col>
    </Row>
  );
};

export default login;
