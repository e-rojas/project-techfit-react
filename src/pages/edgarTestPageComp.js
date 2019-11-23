import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Form
} from "react-bootstrap";

//----- css style variable.

// const colStyle = { marginTop: "100px" };
const rowStyle = { minHeight: "300px" };
const footerButton = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-evenly",
  padding: "40px"
};
export default function App() {
  return (
    <Container className=" " fluid={true}>
      {/* <Row className="bg-dark p-4">
        <Col style={colStyle} lg={8} className="bg-info">
          Column One
        </Col>
        <Col style={colStyle} lg={2} className="bg-danger">
          Column Two
        </Col>
        <Col style={colStyle} lg={2} className="bg-light">
          Column Two
        </Col>
      </Row> */}

      {/* Navigation bar */}

      {/* <Row >
        <Col className='p-0'>
          <Navbar fixed="top" className='pl-5 pr-5 pt-4 pb-4 border-bottom shadow-lg ' bg="light" expand="lg">
            <Navbar.Brand className='font-weight-bolder' href="#home">Techfit</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Button variant="dark">Login</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row> */}

      {/*  Navigation bar*/}
      <Row >
        <Col style={{minHeight:'300px'}} className='mt-5 mb-5 alert-warning'>
          hleeo
        </Col>
      </Row>
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
            <Form.Group>
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
            <Form.Text className="text-muted"></Form.Text>
          </Form>
        </Col>
        <Col lg={6} className=" d-flex flex-column ">
          <h1>Meals List Display</h1>
          <div>
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
                  Most Made Today. Cheesy Broccoli-Stuffed Chicken Breasts.
                  Chicken Parmesan. 2K. Slow Cooker Chicken Taco Soup. 5K.
                  Rosemary-Roasted Chicken with Apples and… Jalapeno Cream
                  Cheese Chicken Enchiladas. 294. Juicy Roasted Chicken. 3K.
                  Greek Lemon Chicken and Potatoes. 543. Buffalo Chicken Dip.
                  4K.
                </p>
                <div className="d-flex flex-row justify-content-between">
                  <span>
                    <i class="far fa-clock"></i> : 10 minutes
                  </span>
                  <span>
                    <i class="fas fa-users"></i> : 5 persons
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

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
            <p style={{ fontSize: "20px" }}>Meal Plan Search</p>
          </header>

          <footer style={footerButton}>
            <Button
              style={{ minWidth: "180px" }}
              size="lg"
              variant="outline-dark"
            >
              Leearn More
            </Button>
          </footer>
        </Col>
        <Col
          lg={6}
          className=" d-flex flex-column justify-content-center align-items-center"
        >
          <img
            className="img-fluid"
            style={{ width: "700px" }}
            src="https://res2.weblium.site/res/5caf62ab525d1a0023399212/5d5bb7801ff8a40023d9799f_optimized_1396"
            alt="application"
          />
        </Col>
      </Row>

      <Row style={rowStyle} className=" p-4 border">
        <Col className="text-center" lg="4">
          <h5 style={{ fontSize: "40px" }}>Techfit</h5>
          <p style={{ fontSize: "20px" }}>Solutions & Support</p>
        </Col>
        <Col className="text-center" lg="4">
          <h5 style={{ fontSize: "40px" }}>Call Us</h5>
          <p style={{ fontSize: "20px" }}>+1 (234) 567 89 00</p>
          <p style={{ fontSize: "20px" }}>+1 (234) 567 89 03</p>
          <p style={{ fontSize: "20px" }}>+1 (234) 567 55 00</p>
        </Col>
        <Col className="text-center" lg="4">
          <h5 style={{ fontSize: "40px" }}>Write Us</h5>
          <p style={{ fontSize: "20px" }}>help@email.com</p>
          <p style={{ fontSize: "20px" }}>mycompany@email.com</p>
        </Col>
      </Row>
      <Row className="bg-dark pt-3 pb-3">
        <Col lg="12">
          <span className="text-white">Created with by Techfit Team </span>
        </Col>
      </Row>
    </Container>
  );
}
