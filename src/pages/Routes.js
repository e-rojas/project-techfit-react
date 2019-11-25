import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";
import MealPlan from "../pages/MealPlan";
import FitnessPlan from "../pages/FitnessPlan";
import Home from '../pages/home'
const Routes = () => {

  const checkAuth = () => {
    if (localStorage.getItem('token')) {
        console.log('token accepted',localStorage.getItem)
        return true
        
    } else {
      localStorage.clear();
        console.log('token false')
        return false
       
}
}
const auth = () => {
if (checkAuth()) {
  window.location.href = '/'
}
}
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/home" component={() => <Home />} />
        <Route path="/meal-plan" component={() => <MealPlan />} />
        <Route path="/fitness-plan" component={() => <FitnessPlan />} />
        <Route path="/login" component={() => < Login  />} />
        <Route path="/register" component={() => <Register />} />
        <Route path="/" component={() => <Profile />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
