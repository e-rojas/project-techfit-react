import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Login from "../pages/login";
import Register from "../pages/register";
import appReducer from '../reducers/appReducer'
const Routes = () => {
	//state,dispatch
	const [state, dispatch] = useReducer(appReducer, {
	user:null
})
	

  
  // Functions
  const checkAuth = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
  const auth = () => {
    if (checkAuth()) {
      window.location.href = "/";
    }
  };
  // Render
    return (
      <BrowserRouter>
		<Switch>
          <Route path="/home" component={() => <Home />} />
          <Route path="/login" component={() => <Login auth={auth} />} />
          <Route
            path="/register"
            component={() => <Register auth={auth} />}
          />
          <Route
            path="/"
            render={() =>
				checkAuth() ? <Profile dispatch={dispatch} user={state} /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </BrowserRouter>
    );
 
}

export default Routes;
