import React from 'react'
import api from './api'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'ko9eaxls';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dylrswykj/upload';

export default class extends React.Component{
  state = {
    uploadedFileCloudinaryUrl: '',
    uploadedFile: null
  }

  handleSubmit(e, { formData}){
    e.preventDefault()

    api.service("users")
    .create({
      email: formData.email,
      password: formData.password,
      firstName: formData.first_name,
      lastName: formData.last_name,
    })
    .then(() => (
      this.props.handleLogIn(formData.email, formData.password)
      .then(() => this.props.push("/"))
    ))
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>First name</label>
            <input name="first_name" placeholder='First name' />
          </Form.Field>
          <Form.Field>
            <label>Last name</label>
            <input name="last_name" placeholder='Last name' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input name="email" placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" name="password" placeholder='Password' />
          </Form.Field>
          <Button primary type='submit'>Signup</Button>
        </Form>
      </div>
    )
  }

}
