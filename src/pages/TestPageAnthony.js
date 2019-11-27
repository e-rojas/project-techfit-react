import React, { Component, Fragment, useState } from 'react'
import axios from 'axios'
import { Row, Col, Button, Form } from "react-bootstrap";



const API_KEY = '7de6d848659f406e97fe5666ba641b80';
const API_URL_INGREDIENT = `https://api.spoonacular.com/recipes/findByIngredients`
const API_URL_RECIPE= 'https://api.spoonacular.com/recipes/search'

const rowStyle = { minHeight: "60vh" };

// const API_KEY = process.env.REACT_APP_API_KEY


// const Suggestions = (props) => {
//   const options = props.results.map(r => (
//     <li key={r.id}>
//       {r.title}
//       <img src={r.image}></img>
//     </li>
//   ))
//   return <ul>{options}</ul>
// }



const Search = props => {
  const [state,setState] = useState ({
    results: [],
    loadingRecipe: true
  })

  const [query, setQuery] = useState(""); 

  const options = state.results && state.results.map(r => (
    <li key={r.data.id}>
      {r.data.title}
      <img src={r.data.image}></img>
      {r.data.readyInMinutes} minutes
      {r.data.servings} servings
      <a href={r.data.sourceURL}>Get Recipe from source</a>
      <a href={r.data.spoonacularSourceURL}>Get Recipe from spoonacular</a>
    </li>
  ))
  

  const getInfo = () => {
    console.log('getInfo')
    axios.get(`${API_URL_INGREDIENT}?apiKey=${API_KEY}&ingredients=${query}`)
      .then((response) => { 
        const promises = [];
        for ( let recipe of response.data ) {
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
    if(event.key === 'Enter'){
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
              <Form.Control type="text" placeholder="Ingredients" value={query} onChange={event => setQuery(event.target.value)} onKeyPress={handleKeyPress}/>
              {!state.loadingRecipe && <ul>{options}</ul> }
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

export default Search

// Data array of objects[
//   Recipe Objects { 
//     id , 
//     image, 
//     missedingredients array of objects []
//   }
// ]