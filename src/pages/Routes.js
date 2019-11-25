import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from "../pages/login";



export default function Routes() {
  const checkAuth = () => {
     console.log('checkout auth')
     if (localStorage.getItem('token')) {
      console.log('local storage',localStorage.getItem('token'))
        return true
        
    } else {
        console.log('token false')
        return false
    }
   }
  
const auth = () => {
  if (checkAuth()) {
  console.log('authorized')
  window.location.href = '/profile'
  }
  else {
    console.log('not authorized')
  }
}
  return (
   	< BrowserRouter>
				< Switch>
					<Route path="/login" component={() => < Login auth={auth} />} />
				
				</Switch>
			</BrowserRouter>
  )
}

