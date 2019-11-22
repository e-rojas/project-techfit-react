import React from 'react';
import {Nav,Navbar,Button,Row,Col} from 'react-bootstrap'
const navbar = () => {
    return (
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
    );
}

export default navbar;
