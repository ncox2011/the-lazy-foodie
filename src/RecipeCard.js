import React from 'react'
import {Card, CardHeader, CardImage, CardContent, Media, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import './index.css'

export default props => {
    let recipe = {}

return (
<Card>
    <CardHeader>
    </CardHeader>
    <CardImage>
    <img className="recipeImage" src={props.recipe.image}/>
    </CardImage>
    <CardContent>
        <Media>
            <MediaContent>
                <Title isSize={6}>{props.recipe.title}</Title>
                <p>Prep-Time:{props.recipe.prepTime}</p>
                <ul>Ingredients
                    .mapthearrayofingredients
                </ul>
            </MediaContent>
        </Media>
        <Content>
            {props.recipe.directions}
            <br/>
        </Content>
    </CardContent>
</Card>
)}