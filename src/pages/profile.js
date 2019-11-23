import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import SavedItems from "../components/Profile/SavedItemsSection/SavedItems";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";

export default function profile() {
  return (
    <Container className="" fluid={true}>
      <Navbar />
      <ProfileInfo />
      <SavedItems />
      <Footer />
    </Container>
  );
}
