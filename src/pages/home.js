import React from 'react';
import { Container } from 'react-bootstrap'
import TopNavBar from '../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import Register from '../components/Register'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

import FirstScreen from '../components/FirstScreen'
import AboutUs from '../components/AboutUs'
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
