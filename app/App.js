import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import api from './api'
import {Container} from 'semantic-ui-react'

import Header from './Header'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'

export default class extends React.Component{
  componentDidMount(){
  }
  render() {
    return <Router>
      <div className="container">
        <Header/>
        <Container>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
        </Container>
      </div>
    </Router>
  }

}
