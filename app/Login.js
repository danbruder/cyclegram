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
      <Container text>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>Email</label>
            <input name="email" placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Pass</label>
            <input name="password" placeholder='Last Name' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }

}
