import React from 'react'
import { Card, CardHeader, CardImage, CardContent, Media, Icon, Button, Image, MediaContent, Title, Subtitle, Content } from 'bloomer'
import 'bulma/css/bulma.css';
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

export default props => {




    return (
        <React.Fragment>
            <Card className="UserCard" isDisplay="inline-flex">
                <CardHeader>
                </CardHeader>
                <CardImage>
                    <img className="userImage" src={props.user.image} />
                </CardImage>
                <CardContent>
                    <Media>
                        <MediaContent>
                            <Title isSize={6}>{props.user.userName}</Title>
                        </MediaContent>
                    </Media>
                    <p className="personal">
                        {props.user.statement}
                        <br />
                    </p>
                </CardContent>
                <Button isColor="success" onClick={() => props.addToFriends((props.userId), (props.user.id))}>
                <FontAwesomeIcon icon="plus" isSize="100px" />
                </Button>
            </Card>                 
        </React.Fragment>
    )
  }
