import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
const initialState = { count: 0 };

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
const whyChooseStyle = {minHeight: "30vh"}
const footerButton = {display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-evenly',padding:'40px'}
const imageStyle = { height: "180px", width: "180px"}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container className="bg-warning p-5" fluid={true}>
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
      <Row style={rowStyle} className="bg-light p-4">
        <Col style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} lg={6} className="">
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
            <Button  variant="outline-dark">Leearn More</Button>
            <Button  variant="outline-dark">Register</Button>
          </footer>
        </Col>
        <Col lg={6} className="bg-danger">
         <img src="" alt=""/>
        </Col>
      </Row>
      <Row className="bg-light p-4">
        <Col style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <h1>Why Choose Us?</h1>
        </Col>
      </Row>
      <Row style={{whyChooseStyle } }className="bg-light p-4 text-center">
        <Col lg={4}>
          <img  style = {imageStyle} src="images/idea.svg" alt="Think Smart"></img>
          <h4>Meal & Fitness Profile</h4>
          <p>We have extensive experience and can be proud of 10 000+ completed projects.</p>
        </Col>
        <Col lg={4}>
          <img  style = {imageStyle} src="images/analysis.svg" alt="Progress Report"></img>
          <h4>Progress Reports</h4>
          <p>We value each client and always respond to feedback throughout our cooperation.</p>
        </Col>
        <Col lg={4}>
          <img style = {imageStyle}  src="images/startup.svg" alt="Rocket"></img>
          <h4>Tech Space Friendly</h4>
          <p>We create our products using the latest technologies to ensure the best experience.</p>
        </Col>
      </Row>

    </Container>
  );
}

{
  /* <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </> */
}
