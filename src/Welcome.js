import React from 'react'
import {Container, Box, Button, Image, Title} from 'bloomer'
import { Link } from 'react-router-dom'

const Welcome = props => {

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
      <Box className="HomeImageSection" pad={{horizontal: 'large'}}>
        <div className="HomeImageShadowWrapper">
          <Image
            alt="Logo"
            size="large"
            src="https://s25.postimg.cc/4pspdnfj3/the_foodie_1.jpg"
          />
        </div>
      </Box>
    </Container>
  )
}

export default Welcome;