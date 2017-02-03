import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import api from './api'


export default class extends Component{
  render() {
    const { component, ...rest } = this.props
    const { isLoggedIn } = this.props

    return (
      <Route {...rest} render={props => (
        isLoggedIn ? (
          React.createElement(component, props)
        ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
          }}/>
        )
      )}/>
    )
  }
}
