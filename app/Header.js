import React, { Component } from 'react'
import api from './api'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home'>
            <Link to="/">CycleGram</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='logout'><Link to="/login">Login</Link></Menu.Item>
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}
