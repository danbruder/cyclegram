import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import './app.css'
import api from './api'

import LoginSignup from './LoginSignup'
import Header from './Header'
import Home from './Home'
import Feed from './Feed'
import Upload from './Upload'
import PrivateRoute from './PrivateRoute'

export default class extends React.Component{
  state = {
    isLoggedIn: false,
    user: {}
  }

  componentDidMount(){
    api.authenticate()
    .then(({data}) => {
      this.setState({
        isLoggedIn: true,
        user: data
      })
    })
    .catch(() => {
      this.setState({
        isLoggedIn: false,
      })
    })
  }

  handleLogOut(){
    api.logout()
    .then(() => {
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    })
  }

  handleLogIn(email, password){
    return api.authenticate({
      type: 'local',
      email: email,
      password: password
    })
    .then(({data}) => {
      this.setState({
        isLoggedIn: true,
        user: data
      })
    })
  }

  render() {
    const { isLoggedIn, user } = this.state

    if(!isLoggedIn){
      return (<Router>
        <div className="container">
          <Header 
            isLoggedIn={false}
            handleLogOut={this.handleLogOut.bind(this)}

          />
          <LoginSignup
            handleLogIn={this.handleLogIn.bind(this)}
          />
        </div>
      </Router>
      )
    }

    return (
      <Router>
        <div className="container">
          <Header 
            isLoggedIn={isLoggedIn}
            handleLogOut={this.handleLogOut.bind(this)}
          />
          <Container>
            { !isLoggedIn ? 
            <Route exact path="/" component={Home}/> : 
            <PrivateRoute isLoggedIn={isLoggedIn} exact path="/" component={Feed}/> }
            <PrivateRoute isLoggedIn={isLoggedIn} path="/upload" component={Upload}/>
          </Container>
        </div>
      </Router>
    )
  }
}
