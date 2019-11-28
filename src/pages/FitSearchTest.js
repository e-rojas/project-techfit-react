import React, { Component, Fragment, useState } from 'react'
import axios from 'axios'
import { Row, Col, Button, Form } from "react-bootstrap";



const API_KEY = '62f772b6ee6db6949310140643ae3fb2ddf6e557';
const API_URL = `https://api.spoonacular.com/recipes/findByIngredients`


const rowStyle = { minHeight: "60vh" };

// const API_KEY = process.env.REACT_APP_API_KEY


const Search = props => {
  const [state,setState] = useState ({
    results: [],
    loadingRecipe: true
  })

  const [query, setQuery] = useState(""); 

  const options = state.results && state.results.map(r => (
    <Fragment>
    <Row className="border pt-4 pb-4 rounded">
      <Col lg={6}>
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
          <Button variant="info" size="sm">
            Add <i className="far fa-plus-square"></i>
          </Button>
        </div>
      </Col>
    </Row>
  </Fragment>
  ))
  

  const getInfo = () => {
    console.log('getInfo')
    axios.get(`${API_URL}?apiKey=${API_KEY}&ingredients=${query}`)
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
            <h1>Workout Search</h1>
          </header>

          <Form style={{ minWidth: "600px" }} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Type workout*</Form.Label>
              <Form.Control type="text" placeholder="Ingredients" value={query} onChange={event => setQuery(event.target.value)} onKeyPress={handleKeyPress}/>
              {!state.loadingRecipe }
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
              {options}
          </div>
        </Col>
      </Row>
    )
  
}

export default Search