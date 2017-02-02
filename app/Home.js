
import React from 'react'
import api from './api'
import { Container, Card, Icon, Image } from 'semantic-ui-react'
import './home.css'

export default class extends React.Component{
  state = {
    posts: []
  }

  componentDidMount(){
    setTimeout(() => 
    api.service("posts")
    .find({
      query: {
        "$sort": { createdAt: -1 }
      }
    })
    .then(page => this.setState({posts: page.data})), 1000)
  }

  renderCard({ imageSrc, description, key, createdAt }){
    console.log(createdAt)
    return ( 
      <Card fluid centered key={key}>
        <Card.Content>
          <Card.Header> Matthew </Card.Header>
        </Card.Content>
        <Image src={imageSrc}/>
        <Card.Content>
          <Card.Meta>
            <span className='date'> Joined in 2015 </span>
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const { posts } = this.state

    return (
      <div className="container home-cards">
        { posts && posts[0] && posts.map((post, key) => {
          return this.renderCard({ ...post, key})
        })}
      </div>
      )
  }

}
