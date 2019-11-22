import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RegistrationForm from '../components/register/registrationForm'
const signup = () => {
    return (
        <Fragment>
            <Navbar />
            <RegistrationForm/>
            <Footer/>
        </Fragment>
    );
}

export default signup;
