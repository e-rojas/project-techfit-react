import React from 'react';
import { Container } from 'react-bootstrap'
import TopNavBar from '../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import FirstScreen from '../components/FirstScreen'
import AboutUs from '../components/AboutUs'
const home = () => {
    return (
        <Container className="" fluid={true}>
            <TopNavBar />
            <FirstScreen />
            <AboutUs />
        </Container>
    );
}

export default home;
