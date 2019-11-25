import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
const UserInfoForm = () => {
  return (
    <Row
      //style={{ marginTop: "200px", marginBottom: "200px" }}
      className="p-4  d-flex justify-content-center "
    >
      <Col lg={12}>
        <Form>
          <Form.Group >
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group >
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="passwordOne" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="passwordTwo" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group >
            <Form.Control type="text" placeholder="Job title" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="number" placeholder="Age" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="number" placeholder="Weight" />
          </Form.Group>
          <Form.Group >
            <Form.Control type="text" placeholder="url-image" />
          </Form.Group>
          <Form.Group >
            <Form.Control type="text" placeholder="Location" />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="About you ..." as="textarea" rows="3" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              width: "100%",
              marginTop: "10px",
              filter: "grayscale(100%)"
            }}
          >
            <i className="far fa-paper-plane"></i>
            <span> Update</span>
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default UserInfoForm;
