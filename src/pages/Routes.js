import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from '../pages/home'
import Profile from "../pages/profile";
import Login from "../pages/login";
import Register from "../pages/register";
class Routes extends Component {
  // Data

  //const [auth,setAuth] = useState(false)
	state = {}
	// Functions
	checkAuth = () => {
		if (localStorage.getItem('token')) {
			return true
		} else {
			return false
		}
	}
	auth = () => {
		if (this.checkAuth()) {
			window.location.href = '/'
		}
	}
	// Render
	render() {
		return (
			< BrowserRouter>
        < Switch>
        <Route path="/home" component={() => <Home />} />
					< Route path="/login" component={() => < Login auth={this.auth} />} />
          < Route path="/register" component={() => < Register auth={this.auth} />} />
					< Route path="/" render={() => (	this.checkAuth() ? (< Profile />) : (< Redirect to="/login" />)	)} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes





 