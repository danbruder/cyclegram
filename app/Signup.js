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
      avatarSrc: this.state.uploadedFileCloudinaryUrl,
    })
    .then(() => {
      console.log("created!")
    })
  }

  onImageDrop(files){
    const file = files[0]
    this.setState({
      uploadedFile: file
    })
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>First name</label>
            <input name="first_name" placeholder='first name' />
          </Form.Field>
          <Form.Field>
            <label>Last name</label>
            <input name="last_name" placeholder='last name' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input name="email" placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>Pass</label>
            <input name="password" placeholder='Password' />
          </Form.Field>
        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? 
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone> :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>
          }
        </div>
          <Button type='submit'>Signup</Button>
        </Form>
      </div>
    )
  }

}
