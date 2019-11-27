import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Row, Col, Button, Form } from "react-bootstrap";


const API_KEY = '7de6d848659f406e97fe5666ba641b80';
const API_URL = `https://api.spoonacular.com/recipes/findByIngredients`

const rowStyle = { minHeight: "60vh" };

// const API_KEY = process.env.REACT_APP_API_KEY


const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.name}
    </li>
  ))
  return <ul>{options}</ul>
}



class Search extends Component {
  state = {
    query: '',
    results: []
  }
  const API_KEY = '7de6d848659f406e97fe5666ba641b80';
  const API_URL = `https://api.spoonacular.com/recipes/findByIngredients`
  getInfo = () => {
    axios.get(`${API_URL}?apiKey=${API_KEY}&ingredients=${this.state.query}&number=10`)
      .then((data) => {
        console.log('success')
        console.log(data)
        this.setState({
          results: data.data
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 3 === 0) {
          this.getInfo()
        }
      }
    })
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }

  render() {
    return (
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
              <Form.Control type="text" placeholder="Ingredients" ref={input => this.search = input} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress}/>
              <Suggestions results={this.state.results} />
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
              Search
            </Button>
            <Form.Text className="text-muted"></Form.Text>
          </Form>
        </Col>
        <Col lg={6} className=" d-flex flex-column ">
          <h1>Meals List Display</h1>
          <div>
            <Fragment>
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
                    Most Made Today. Cheesy Broccoli-Stuffed Chicken Breasts. Chicken
                    Parmesan. 2K. Slow Cooker Chicken Taco Soup. 5K. Rosemary-Roasted
                    Chicken with Apples and… Jalapeno Cream Cheese Chicken Enchiladas.
                    294. Juicy Roasted Chicken. 3K. Greek Lemon Chicken and Potatoes.
                    543. Buffalo Chicken Dip. 4K.
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <span>
                      <i className="far fa-clock"></i> : 10 minutes
                    </span>
                    <span>
                      <i className="fas fa-users"></i> : 5 persons
                    </span>
                    <Button variant="info" size="sm">
                      Add <i className="far fa-plus-square"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Fragment>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Search

// Data array of objects[
//   Recipe Objects { 
//     id , 
//     image, 
//     missedingredients array of objects []
//   }
// ]