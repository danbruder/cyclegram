import React from 'react'
import api from './api'
import { Redirect } from 'react-router-dom'
import { Container, Button, Checkbox, Form } from 'semantic-ui-react'

export default class extends React.Component{
  state = {
    isLoggedIn: false
  }

  handleSubmit(e, { formData }){
    e.preventDefault()
    this.props.handleLogIn(
      formData.email,
      formData.password
    ).then(() => this.props.push("/"))
  }

  render() {
    const { isLoggedIn } = this.state

    if(isLoggedIn){
      return <Redirect to={{
        pathname: '/',
        state: { from: this.props.location }
      }}/>
    }

    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Field>
          <label>Email</label>
          <input name="email" placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' name="password" placeholder='Password' />
        </Form.Field>
        <Button primary type='submit'>Login</Button>
      </Form>
    )
  }

}
