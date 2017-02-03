import React from 'react'
import api from './api'
import { Redirect } from 'react-router-dom'
import {Container, Input, Menu, Segment} from 'semantic-ui-react'
import Login from './Login'
import Signup from './Signup'


export default class extends React.Component{
  state = {
    displaySignup: false,
    activeItem: "login"
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { displaySignup, activeItem  } = this.state
    const { handleLogIn } = this.props

    return (
      <Container text>
        <Menu attached='top' tabular>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} />
        </Menu>

        <Segment attached='bottom'>
          { activeItem == "login" ? <Login handleLogIn={handleLogIn}/> : <Signup handleLogIn={handleLogIn}/> }
        </Segment>
    </Container>
      )

    }

}
