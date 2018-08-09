import React from 'react'
import {Container, Box, Button, Image, Title} from 'bloomer'
import { Link } from 'react-router-dom'

const Welcome = props => {
//Screen user sees on page load.
    return (
        <Container>
           <Container className="HomeCopy" pad={{vertical: 'none'}} primary={true}>
        <Title isSize="1" className="home-headline">
          Welcome!
        </Title>
        <p tag="h2">To get started Register or Sign-In</p>
        <Button>
            <Link to={{
                pathname: "/Login"}}>
                Sign-in
            </Link>
        </Button>
        <Button>
            <Link to={{
              pathname: "/Register"}}>
              Register
            </Link>
        </Button>
      </Container>
    </Container>
  )
}

export default Welcome;