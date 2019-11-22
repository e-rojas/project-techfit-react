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
      <Row>
        <hr></hr>
            <Col className='text-center' lg={12} >
              <h1 className='lead' style={{fontSize:'60px'}}>About Us</h1>
            <p style={{fontSize:'30px'}}>We provide a wide range of services to meet even the most daring requirements.</p>
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
            <p style={{fontSize:'20px'}}>Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients built on trust and mutual understanding. We are devoted to creating unique and innovative solutions along with the high-quality supporting services.</p>
          </header>
         
          <footer style={footerButton}>
            <Button style={{minWidth:'180px'}} size='lg' variant="outline-dark">Leearn More</Button>
            
          </footer>
        </Col>
        <Col lg={6} className=" d-flex flex-column justify-content-center align-items-center">
          <img className='img-fluid' style={{width:'700px'}} src='https://res2.weblium.site/res/5caf62ab525d1a0023399212/5d5bb7801ff8a40023d9799f_optimized_1396' alt="application" />
        </Col>
      </Row>

      <Row  style={rowStyle} className=" p-4 border">
        <Col className='text-center' lg='4'>
          <h5 style={{fontSize:'40px'}}>Techfit</h5>
          <p style={{fontSize:'20px'}}>Solutions & Support</p>
        </Col>
        <Col className='text-center' lg='4'>
          <h5 style={{ fontSize: '40px' }}>Call Us</h5>
          <p style={{fontSize:'20px'}}>+1 (234) 567 89 00</p>
          <p style={{fontSize:'20px'}}>+1 (234) 567 89 03</p>
          <p style={{fontSize:'20px'}}>+1 (234) 567 55 00</p>
        </Col>
        <Col className='text-center' lg='4'>
          <h5 style={{ fontSize: '40px' }}>Write Us</h5>
          <p style={{fontSize:'20px'}}>help@email.com</p>
          <p style={{fontSize:'20px'}}>mycompany@email.com</p>
        </Col>
      </Row>
      <Row className='bg-dark pt-3 pb-3'>
        <Col lg='12'>
       <span className='text-white'>Created with by Techfit Team </span>
        </Col>
      </Row>



    
    </Container>
  );
}


