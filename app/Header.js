import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Icon, Menu, Segment } from 'semantic-ui-react'
import api from './api'
import './header.css'

export default class MenuExampleSecondaryPointing extends Component {
  constructor(props){
    super(props)
  }

  _handleLogOut(){
    this.props.handleLogOut()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <div className="main-menu">
        <Menu secondary>
          <Menu.Item name='home'>
            <h2>
              <Link to="/">
                <img className="logo" src="/apple-icon-76x76.png"/>
                <div className="title">Custom Bobber Club</div>
              </Link>
            </h2>
          </Menu.Item>
          <Menu.Menu position='right'>
            { isLoggedIn &&  <Menu.Item name='upload'><Link to="/upload">Upload</Link></Menu.Item>}
            { isLoggedIn &&  <Menu.Item  name='logout'><a href="javascript:void(0)" onClick={this._handleLogOut.bind(this)}>Logout</a></Menu.Item>}
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}
