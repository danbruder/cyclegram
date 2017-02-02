import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import api from './api'
import './header.css'

export default class MenuExampleSecondaryPointing extends Component {
  render() {
    const { isLoggedIn } = this.props

    return (
      <div>
        <Menu fixed="top" pointing secondary>
          <Menu.Item name='home'>
            <Link to="/">CycleGram</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            { isLoggedIn &&  <Menu.Item name='upload'><Link to="/upload">Upload</Link></Menu.Item>}
            { isLoggedIn &&  <Menu.Item name='logout'><Link to="/logout">Logout</Link></Menu.Item>}
            { !isLoggedIn &&  <Menu.Item name='login'><Link to="/login">Login</Link></Menu.Item>}
            { !isLoggedIn &&  <Menu.Item name='login'><Link to="/signup">Signup</Link></Menu.Item>}
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}
