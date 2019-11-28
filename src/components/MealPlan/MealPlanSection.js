import React, { Component, Fragment, useState } from 'react'
import axios from 'axios'
import { Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const API_KEY = '0d051cbbb7514278bad41482cc39a0f2';
const API_URL = `https://api.spoonacular.com/recipes/findByIngredients`


const rowStyle = { minHeight: "60vh" };



const MealPlanSection = () => {
  const [state, setState] = useState({
    results: [],
    loadingRecipe: true
  })

  const [query, setQuery] = useState("");

  const options = state.results && state.results.map((r, i) => (
    <Fragment>
      <Row key={i} id={i} className="border pt-4 pb-4 rounded" style={{ marginTop: "10px", marginRight: "15px" }} >
        <Col lg={6} style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img
            style={{ height: "200px" }}
            className="img-fluid img-thumbnail"
            src={r.data.image}
            alt="food"
          />
        </Col>
        <Col lg={6}>
          <h5>{r.data.title}</h5>
          <p>
            {r.data.instructions}
          </p>
          <div className="d-flex flex-row justify-content-between">
            <span>
              <i className="far fa-clock"></i> : {r.data.readyInMinutes} minutes
          </span>
            <span>
              <i className="fas fa-users"></i> : {r.data.servings} servings
          </span>
            <Button variant="info" size="sm" type="submit">
              Add <i className="far fa-plus-square"></i>
            </Button>
          </div>
          <a href={r.data.sourceUrl} target="_blank" style={{ fontWeight: "bold", color: "black" }} >Click to see full recipe</a>
        </Col>
      </Row>
    </Fragment>
  ))


  const getInfo = () => {
    console.log('getInfo')
    axios.get(`${API_URL}?apiKey=${API_KEY}&ingredients=${query}`)
      .then((response) => {
        const promises = [];
        for (let recipe of response.data) {
          promises.push(axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`))
        }

        console.log('success')
        console.log(response)

        return Promise.all(promises)
      })
      .then((response) => {
        console.log("promise", response)
        setState({
          results: response,
          loadingRecipe: false
        })

      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleSubmit = event => {
    event.preventDefault()
    getInfo()
  }

  const handleInputChange = (event) => {
    setState({
      query: event.target.value
    }, () => {
      if (state.query && state.query.length > 1) {
        if (state.query.length % 3 === 0) {
          getInfo()
        }
      }
    })
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('enter press here! ')
    }
  }

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

        <Form style={{ minWidth: "600px" }} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Type Ingredients*</Form.Label>
            <Form.Control type="text" placeholder="Ingredients" value={query} onChange={event => setQuery(event.target.value)} onKeyPress={handleKeyPress} />
            {!state.loadingRecipe}
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
      <Col lg={6} className=" d-flex flex-column " style={{ overflowY: 'scroll', maxHeight: "1000px" }}>
        <h1 className="text-center">Meals List Display</h1>
        <div>
          {options}
        </div>
      </Col>
    </Row>
  )

}

export default MealPlanSection;
