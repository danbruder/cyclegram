import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './Login'
import api from './api'

export default class extends React.Component{
  componentDidMount(){
    const userService = api.service('users');
    userService.find().then(u => console.log(u))
  }
  render() {
    return <Router>
      <div className="container">
        <a href="http://localhost:3030/auth">Login</a>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
  }

}
