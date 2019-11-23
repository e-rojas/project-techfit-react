import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Button, Row, Col } from "react-bootstrap";
const navbar = () => {
  return (
    <Row>
      <Col className="p-0">
        <Navbar
          fixed="top"
          className="pl-5 pr-5 pt-4 pb-4 border-bottom shadow-lg "
          bg="light"
          expand="lg"
        >
          <Navbar.Brand className="font-weight-bolder" href="#home">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Techfit
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex flex-row justify-content-center align-items-center">
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/"
                className="mr-5"
              >
                Home
              </NavLink>
              <NavLink to="/login">
                {" "}
                <Button variant="dark">Login</Button>{" "}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default navbar;
