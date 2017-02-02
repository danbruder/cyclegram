import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import api from './api'

export default class MenuExampleSecondaryPointing extends Component {
  state = {
    loggedIn: false
  }

  componentDidMount(){
    // const token = api.get("token")
    //console.log(token)
    //if (token) {
      //this.setState({
        //loggedIn: true 
      //})
    //}
  }

  render() {
    const { loggedIn } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home'>
            <Link to="/">CycleGram</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            { loggedIn &&  <Menu.Item name='logout'><Link to="/logout">Logout</Link></Menu.Item>}
            { !loggedIn &&  <Menu.Item name='login'><Link to="/login">Login</Link></Menu.Item>}
            { !loggedIn &&  <Menu.Item name='login'><Link to="/signup">Signup</Link></Menu.Item>}
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}
