import React, { Fragment } from 'react';
import MealPlanSection from '../components/MealPlan/MealPlanSection'
import NavBar from '../components/partials/Navbar'
import Footer from '../components/partials/Footer'

const MealPlan = () => {
    return (
        <Fragment>
            <NavBar />
            <MealPlanSection />
            <Footer />
     
        </Fragment>
    );
}

export default MealPlan;
