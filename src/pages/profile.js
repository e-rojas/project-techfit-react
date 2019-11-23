import React, { Fragment } from 'react'
import Navbar from '../components/partials/Navbar'
import Footer from '../components/partials/Footer'
import SavedItems from '../components/Profile/SavedItemsSection/SavedItems'
import ProfileInfo from '../components/Profile/ProfileInfoSection/ProfileInfo'


export default function profile() {
    return (
        <Fragment>
            <Navbar />
            <ProfileInfo />
            <SavedItems />
            <Footer />
        </Fragment>
    )
}
