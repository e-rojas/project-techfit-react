import React, { Component } from 'react'
import axios from 'axios'

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
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search