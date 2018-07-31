import React from 'react'
import {Card, CardHeader, CardImage, CardContent, Media, Icon, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import '../index.css'
import 'bulma/css/bulma.css';


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
                <h3>Ingredients</h3>
                {/* <ul className="ingredientList">
                    {
                        props.recipe.ingredients.map(ingredient => {
                    return <li key={ingredient}>{ingredient}
                    </li>})
                }
                </ul> */}
            </MediaContent>
        </Media>
        <Content>
            {props.recipe.directions}
            <br/>
        </Content>
    </CardContent>
    <button>Delete</button>
</Card>
)}