import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import SavedItems from "../components/Profile/SavedItemsSection/SavedItems";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";
import Tracker from "../components/liquids/Tracker.js";
import Chart from "../components/liquids/Chart.js";

export default function profile() {
  return (
    <Container className="" fluid={true}>
      <Navbar />
      <ProfileInfo />
      <SavedItems />
      <Row>
        <Col xs lg={3}>
          <Tracker />        
        </Col>
        <Col xs >
          <Chart />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
