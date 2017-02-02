import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import './app.css'
import api from './api'

import Header from './Header'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Upload from './Upload'

export default class extends React.Component{
  state = {
    triedLoggingIn: false,
    isLoggedIn: false,
    user: {}
  }

  componentDidMount(){
    api.authenticate()
    .then(({data}) => {
      this.setState({
        isLoggedIn: true,
        triedLoggingIn: true,
        user: data
      })
    })
    .catch(() => {
      this.setState({
        isLoggedIn: false,
        triedLoggingIn: true
      })
    })
  }

  render() {
    const { isLoggedIn, triedLoggingIn } = this.state
    if(!triedLoggingIn){
      return (
        <Router>
          <div className="container">
            <Header isLoggedIn={isLoggedIn}/>
            <Dimmer active inverted>
              <Loader inverted />
            </Dimmer>
          </div>
        </Router>
      )
    }

    if(!isLoggedIn){
      return (
        <Router>
          <div className="container">
            <Header isLoggedIn={isLoggedIn}/>
            <Container>
              <Route exact path="/" component={Login}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
            </Container>
          </div>
        </Router>
      )
    }

    return <Router>
      <div className="container">
        <Header isLoggedIn={isLoggedIn}/>
        <Container>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/upload" component={Upload}/>
        </Container>
      </div>
    </Router>
  }
}
