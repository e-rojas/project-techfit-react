import React from "react";
import MealPlanSection from "../components/MealPlan/MealPlanSection";
import NavBar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Container } from "react-bootstrap";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";
const MealPlan = () => {
  return (
    <Container className="" fluid={true}>
      <NavBar />
      <ProfileInfo />
      <MealPlanSection />
      <Footer />
    </Container>
  );
};

export default MealPlan;
