import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
 
  Nav,


} from "react-bootstrap";


//----- css style variable.

const colStyle = { marginTop: "100px" };
const rowStyle = { minHeight: "60vh" };
const footerButton = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-evenly",
  padding: "40px"
};
export default function App() {
 
  return (
    <Container className="bg-warning " fluid={true}>
      <Row className="bg-dark p-4">
        <Col style={colStyle} lg={8} className="bg-info">
          Column One
        </Col>
        <Col style={colStyle} lg={2} className="bg-danger">
          Column Two
        </Col>
        <Col style={colStyle} lg={2} className="bg-light">
          Column Two
        </Col>
      </Row>

      {/* Navigation bar */}

      <Row >
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
      </Row>

      {/*  Navigation bar*/}
      <Row style={rowStyle} className="bg-light p-4">
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
            <h1 style={{fontSize:'60px'}}>Techfit</h1>
            <p style={{fontSize:'30px'}}>To inspire healthy living in a sedentary world.</p>
          </header>
          <div style={{fontSize:'30px'}} className='d-flex ' >
            <span>Follow Us:</span>
            <div>
            <span className='ml-3 mr-3'><i class="fab fa-instagram"></i></span>
            <span className='ml-3 mr-3'><i class="fab fa-facebook-square"></i></span>
            <span className='ml-3 mr-3'><i class="fab fa-youtube-square"></i></span>
           </div>
          </div>
          <footer style={footerButton}>
            <Button style={{minWidth:'180px'}} size='lg' variant="outline-dark">Leearn More</Button>
            <Button style={{minWidth:'180px'}} size='lg' variant="dark">Register</Button>
          </footer>
        </Col>
        <Col lg={6} className=" d-flex flex-column justify-content-center align-items-center">
          <img src='images/about-us-app-display.png' alt="application" />
        </Col>
      </Row>
      <Row style={rowStyle} className="bg-light p-4">
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
            <h1>Techfit</h1>
            <p>To inspire healthy living in a sedentary world.</p>
          </header>
          <div>
            <span>Follow Us:</span>
            <span>Facebook Icon</span>
            <span>Instagram Icon</span>
            <span>Youtube Icon</span>
          </div>
          <footer style={footerButton}>
            <Button variant="outline-dark">Leearn More</Button>
            <Button variant="outline-dark">Register</Button>
          </footer>
        </Col>
        <Col lg={6} className="bg-danger">
          <img src="" alt="" />
        </Col>
      </Row>
    </Container>
  );
}


