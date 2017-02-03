
import React from 'react'
import api from './api'
import { Button, Container, Card, Icon, Image } from 'semantic-ui-react'
import './feed.css'
import moment from 'moment'

export default class extends React.Component{
  state = {
    posts: [],
    page: 0
  }

  componentDidMount(){
    this.getPage = this.getPage.bind(this)
    this.handleLoadMore = this.handleLoadMore.bind(this)
    this.getPage(0)

    api.service("posts")
    .on("created", (post) => {
      console.log('created', post)
      const newPosts = [post]
      this.setState({
        posts: newPosts.concat(this.state.posts)
      })
    })
  }

  getPage(page){
    const { posts } = this.state
    const itemsPerPage = 25

    api.service("posts")
    .find({
      query: {
        "$sort": { createdAt: -1 },
        "$limit": itemsPerPage,
        "$skip": itemsPerPage * page
      }
    })
    .then(page => {
      this.setState({
        posts: posts.concat(page.data)
      })
    })
  }

  handleLoadMore(){
    this.getPage(this.state.page + 1)
  }

  renderCard({ imageSrc, description, key, createdAt, user }){
    return ( 
      <Card fluid centered key={key}>
        <Card.Content>
          <Card.Header> {user && user.email ? user.email : ""} </Card.Header>
        </Card.Content>
        <Image src={imageSrc}/>
        <Card.Content>
          <Card.Meta>
            <span className='date'> {moment(createdAt).fromNow()} </span>
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='comments' />
            22 comments
          </a>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const { posts } = this.state

    return (
      <div className="container feed-cards">
        { posts && posts[0] && posts.map((post, key) => {
          return this.renderCard({ ...post, key})
        })}
        <Button secondary type='submit' onClick={this.handleLoadMore}>Load More</Button>
      </div>
      )
  }

}
