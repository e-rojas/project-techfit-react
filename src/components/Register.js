import React from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";

const rowStyle = { minHeight: "60vh" };

const register = () => {
  return (
    <Row styel={{ rowStyle }} className="bg-light p-4">
      <Col lg={6}>
        <img src="https://res2.weblium.site/res/5dd5707543faa200229569cd/5dd5aa4355bfed00218473d1_optimized" style={{WebkitFilter: "grayscale(100%)", filter: 'grayscale(100%)'}}></img>
      </Col>
      <Col lg={6} className="text-center" style={{ alignItems: "center" }}>
        <h1>Would You Like To Improve Your Health At Work?</h1>
        <h5>Complete the form below and receive a full analysis of your business within 2 days!</h5>
        <Form style={{ width: '100%', alignItems: "center" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="ex: 777-777-7777" />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: "60%" }}>
            Register!
            </Button>
        </Form>
      </Col>

    </Row>
  )

}

export default register;