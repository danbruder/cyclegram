import React from 'react'
import api from './api'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class extends React.Component{
  handleSubmit(e, { formData }){
    e.preventDefault()
    console.log(formData)
    api.authenticate({
      type: 'local',
      email: formData.email,
      password: formData.password
    })
    .then(() => {
      console.log('logged in!')
    })
  }

  render() {
    return (
      <div className="container">
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
      </div>
    )
  }

}
