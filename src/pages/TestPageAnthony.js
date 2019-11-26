import React, { Component } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "0c473eb99fmsh862d231f4145a1ap1555b5jsne89b311b6ec2"
	}
})
.then(response => {
	return response.json()
})
.then(function (data) {
  console.log(data)
})
.catch(err => {
	console.log(err);
});


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

  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data.data                              
        })
      })
  }

  handleInputChange = () => {
    // console.log(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
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