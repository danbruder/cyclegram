import React from 'react'
import api from './api'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class extends React.Component{
  handleSubmit(e, { formData}){
    e.preventDefault()
    api.service("users")
    .create({
      email: formData.email,
      password: formData.password
    })
    .then(() => {
      console.log("created!")
    })
  }
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>Email</label>
            <input name="email" placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>Pass</label>
            <input name="password" placeholder='Password' />
          </Form.Field>
          <Button type='submit'>Signup</Button>
        </Form>
      </div>
    )
  }

}
