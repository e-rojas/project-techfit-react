import React from 'react';
import { Container } from 'react-bootstrap'
import TopNavBar from '../components/Partials/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import Register from '../components/Homepage/Register'
import WhyChooseUs from '../components/Homepage/WhyChooseUs'
import Footer from '../components/Partials/Footer'

import FirstScreen from '../components/Homepage/FirstScreen'
import AboutUs from '../components/Homepage/AboutUs'
const home = () => {
    return (
        <Container className="" fluid={true}>
            <TopNavBar />
            <FirstScreen />
            <AboutUs />
         
            <WhyChooseUs />
            <Register />
            <Footer/>
           
        </Container>
    );
}

export default home;
