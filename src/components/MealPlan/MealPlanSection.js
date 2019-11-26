import React, { Component } from "react";
import axios from 'axios'
import { Row, Col, Button, Form } from "react-bootstrap";
import MealCard from "../MealPlan/MealCard";

const API_KEY = '7de6d848659f406e97fe5666ba641b80';
const API_URL = `https://api.spoonacular.com/recipes/findByIngredients`

const rowStyle = { minHeight: "60vh" };

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.name}
    </li>
  ))
  return <ul>{options}</ul>
}



const MealPlanSection = () => {
  class Search extends Component {
    state = {
      query: '',
      results: []
    }
  
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
          if (this.state.query.length % 2 === 0) {
            this.getInfo()
          }
        }
      })
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
                <Form.Control type="text" placeholder="Ingredients" ref={input => this.search = input} onChange={this.handleInputChange} />
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
              <MealCard />
            </div>
          </Col>
        </Row>
      )
    }
  }
}

export default MealPlanSection;
