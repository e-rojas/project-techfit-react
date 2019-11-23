import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";
import MealPlan from "../pages/MealPlan";
import FitnessPlan from "../pages/FitnessPlan";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/meal-plan" component={() => <MealPlan />} />
        <Route path="/fitness-plan" component={() => <FitnessPlan />} />
        <Route path="/login" component={() => <Login />} />
        <Route path="/register" component={() => <Register />} />
        <Route path="/" component={() => <Profile />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
