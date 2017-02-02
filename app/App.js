import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import './app.css'
import api from './api'

import Header from './Header'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Upload from './Upload'

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
    });
  }

  render() {
    const { isLoggedIn } = this.state

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
