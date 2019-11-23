import React, { Fragment } from 'react';
import NavBar from '../components/partials/Navbar'
import Footer from '../components/partials/Footer'
import FitnessPlanSection from '../components/FitnessPlan/FitnessPlanSection'
const FitnessPlan = () => {
    return (
        <Fragment>
            <NavBar />
          <FitnessPlanSection />
        <Footer />
        </Fragment>
    );
}

export default FitnessPlan;
