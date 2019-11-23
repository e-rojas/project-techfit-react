import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Accordion, Card } from "react-bootstrap";
const initialState = { count: 0 };

import MealCard from '../components/MealPlan/MealCard'

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
//----- css style variable.

const colStyle = { marginTop: "100px" };
const rowStyle = { minHeight: "60vh" };
const whyChooseStyle = { minHeight: "30vh" }
const footerButton = { display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', padding: '40px' }
const imageStyle = { height: "180px", width: "180px" }
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Row>
      <Col lg={5} className="p-5">
        <Accordion >
          <Card style={{backgroundColor: "white! important"}}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "black"}} >
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                
                <MealCard />
              
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: "black"}}>
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{color: "black"}}>
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{color: "black"}}>
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{color: "black"}}>
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
      <Col lg={2}>
      </Col>
      <Col lg={5} className="p-5">
      <Accordion >
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{color: "black"}}>
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{color: "black"}}>
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1" style={{color: "black"}}>
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{color: "black"}}>
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{color: "black"}}>
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{color: "black"}}>
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
    // <Container className="bg-warning p-5" fluid={true}>
    //   <Row className="bg-dark p-4">
    //     <Col style={colStyle} lg={8} className="bg-info">
    //       Column One
    //     </Col>
    //     <Col style={colStyle} lg={2} className="bg-danger">
    //       Column Two
    //     </Col>
    //     <Col style={colStyle} lg={2} className="bg-light">
    //       Column Two
    //     </Col>
    //   </Row>
    //   <Row style={rowStyle} className="bg-light p-4">
    //     <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} lg={6} className="">
    //       <header>
    //         <h1>Techfit</h1>
    //         <p>To inspire healthy living in a sedentary world.</p>
    //       </header>
    //       <div>
    //         <span>Follow Us:</span>
    //         <span>Facebook Icon</span>
    //         <span>Instagram Icon</span>
    //         <span>Youtube Icon</span>
    //       </div>
    //       <footer style={footerButton}>
    //         <Button variant="outline-dark">Leearn More</Button>
    //         <Button variant="outline-dark">Register</Button>
    //       </footer>
    //     </Col>
    //     <Col lg={6} className="bg-danger">
    //       <img src="" alt="" />
    //     </Col>
    //   </Row>
    //   <Row className="bg-light p-4">
    //     <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    //       <h1>Why Choose Us?</h1>
    //     </Col>
    //   </Row>
    //   <Row style={{ whyChooseStyle }} className="bg-light p-4 text-center">
    //     <Col lg={4}>
    //       <img style={imageStyle} src="images/idea.svg" alt="Think Smart"></img>
    //       <h4>Meal & Fitness Profile</h4>
    //       <p>We have extensive experience and can be proud of 10 000+ completed projects.</p>
    //     </Col>
    //     <Col lg={4}>
    //       <img style={imageStyle} src="images/analysis.svg" alt="Progress Report"></img>
    //       <h4>Progress Reports</h4>
    //       <p>We value each client and always respond to feedback throughout our cooperation.</p>
    //     </Col>
    //     <Col lg={4}>
    //       <img style={imageStyle} src="images/startup.svg" alt="Rocket"></img>
    //       <h4>Tech Space Friendly</h4>
    //       <p>We create our products using the latest technologies to ensure the best experience.</p>
    //     </Col>
    //   </Row>
    //   <Row styel={{rowStyle}}className="bg-light p-4">
    //     <Col lg={6}>
    //       <img src="https://res2.weblium.site/res/5dd5707543faa200229569cd/5dd5aa4355bfed00218473d1_optimized"></img>
    //     </Col>
    //     <Col lg={6} className="text-center" style={{alignItems: "center"}}>
    //       <h1>Would You Like To Improve Your Health At Work?</h1>
    //       <h5>Complete the form below and receive a full analysis of your business within 2 days!</h5>
    //       <Form  style={{width: '100%', alignItems: "center"}}>
    //         <Form.Group controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control type="email" placeholder="Enter email" />
    //           <Form.Text className="text-muted">
    //             We'll never share your email with anyone else.
    //           </Form.Text>
    //         </Form.Group>

    //         <Form.Group controlId="formBasicPassword">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control type="password" placeholder="Password" />
    //         </Form.Group>
            
    //         <Form.Group controlId="formBasicPassword">
    //           <Form.Label>Phone Number</Form.Label>
    //           <Form.Control type="phone" placeholder="ex: 777-777-7777" />
    //         </Form.Group>

    //         <Button variant="primary" type="submit" style={{width: "60%"}}>
    //           Register!
    //         </Button>
    //       </Form>
    //     </Col>

    //   </Row>

    // </Container>
  );
}

{
  /* <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </> */
}
