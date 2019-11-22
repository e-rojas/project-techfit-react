import React from 'react';
import { Container } from 'react-bootstrap'
import TopNavBar from '../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import Register from '../components/Register'
import WhyChooseUs from '../components/WhyChooseUs'
import About from '../components/AboutUs'

const home = () => {
    return (
        <Container className="bg-warning " fluid={true}>
            <TopNavBar />
            <About />
            <WhyChooseUs />
            <Register />

        </Container>
    );
}

export default home;
