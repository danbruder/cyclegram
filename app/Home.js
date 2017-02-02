
import React from 'react'
import api from './api'
import { Container, Card, Icon, Image } from 'semantic-ui-react'
import './home.css'

export default class extends React.Component{
  render() {
    return (
      <div className="container home-cards">
        <Container>
          <Card fluid centered>
            <Image src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
            <Card.Content>
              <Card.Header>
                Matthew
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Joined in 2015
                </span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Container>
      </div>
      )
  }

}
