import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import SavedItems from "../components/Profile/SavedItemsSection/SavedItems";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";
import Tracker from "../components/liquids/Tracker.js";
import Chart from "../components/liquids/Chart.js";
import useProfileTokenUser from "../handlers/profile_token_user";

export default function Profile(props) {
  useProfileTokenUser(props.dispatch);
  const test = useProfileTokenUser(props.dispatch);

  return (
    <Container className="" fluid={true}>
      <Navbar />
      <ProfileInfo user={user.user} />

      <Row style={{ borderBottom: "1px solid black" }}>
        <Col lg={4} style={{ borderRight: "1px solid black" }}>
          <Tracker />
        </Col>
        <Col lg={8}>
          <h3 className="text-center" style={{ marginTop: "15px" }}>
            {" "}
            Liquid Consumption Chart
          </h3>
          <Chart />
        </Col>
      </Row>
      <SavedItems />

      <Footer />
    </Container>
  );
}
