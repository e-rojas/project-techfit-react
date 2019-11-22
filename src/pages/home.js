import React from 'react';
import { Container } from 'react-bootstrap'
import TopNavBar from '../components/navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import About from '../components/aboutUs'
import Register from '../components/Register'
import WhyChooseUs from '../components/WhyChooseUs'

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
