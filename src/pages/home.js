import React from 'react';
import { Container, Navbar } from 'react-bootstrap'
import TopNavBar from '../components/navbar'
import "bootstrap/dist/css/bootstrap.min.css";
const home = () => {
    return (
        <Container className="bg-warning " fluid={true}>
            <TopNavBar />
        </Container>
    );
}

export default home;
