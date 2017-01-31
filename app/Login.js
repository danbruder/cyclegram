import React from 'react'
import api from './api'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state)
    const usersService = api.service('users');
    const { email, password } = this.state

    usersService.create({
      email,
      password
    }).then((result) => {
      api.authenticate({
        type: 'local',
        'email': email,
        'password': password
      }).then((result) => {
        console.log('Authenticated!', api.get('token'));
      }).catch((error) => {
        console.error('Error authenticating!', error);
      });
    }).catch((err) => {
      console.log('err', err);
    });
  }

  handleChange(e){
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
          <input type="text" name="email" onChange={this.handleChange}/>
        </div>
          <div>
          <input type="password" name="password" onChange={this.handleChange}/>
        </div>
          <div>
            <input type="submit" value="Create Account"/>
        </div>
        </form>
      </div>
    )
  }
}
