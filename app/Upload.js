import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Image, Card, Grid, Container,  Button, Checkbox, Form  } from 'semantic-ui-react'
import api from './api'
import './upload.css'

const CLOUDINARY_UPLOAD_PRESET = 'ko9eaxls';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dylrswykj/upload';

export default class extends Component {
  state = {
    uploadedFileCloudinaryUrl: '',
    uploadedFile: null
  }

  handleSubmit(e, { formData }){
    e.preventDefault()
    const postService = api.service("posts")

    postService.create({
      imageSrc: this.state.uploadedFileCloudinaryUrl,
      description: formData.description
    })
    .then(result => {
      this.props.push("/")
    })
    .catch(err => console.error(err))
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
      <Container text>
        <div className="container uploads">
              <Card>
                <Card.Content>
                  <Card.Description>
                  </Card.Description>
                    {this.state.uploadedFileCloudinaryUrl === '' ? 
                    <Dropzone
                      multiple={false}
                      accept="image/*"
                      onDrop={this.onImageDrop.bind(this)}
                      className="drop"
                    >
                      Drop image here or click to browse
                    </Dropzone> :
                    <div>
                      <p>{this.state.uploadedFile.name}</p>
                      <Image src={this.state.uploadedFileCloudinaryUrl} />
                    </div>
                }
                </Card.Content>
              </Card>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.TextArea name='description' label='Details' placeholder='Anything else we should know?' rows='3' />
                <Button primary type='submit'>Submit</Button>
              </Form>
        </div>
      </Container>
      )
      }
      }
