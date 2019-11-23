import React, { Fragment } from 'react'
import Navbar from '../components/partials/Navbar'
import Footer from '../components/partials/Footer'
import SavedItems from '../components/Profile/SavedItems/SavedItems'
export default function profile() {
    return (
        <Fragment>
            <Navbar />
            <SavedItems />
            <Footer />
        </Fragment>
    )
}
