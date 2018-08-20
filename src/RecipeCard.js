import React from 'react'
import {Card, CardHeader, CardImage, Button, CardContent, Media, Icon, withHelperModifiers, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import './index.css'
import 'bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)



export default props => {
    let recipe = {}


return (
  
<Card className="RecipeCard" isDisplay="inline-flex">
    <CardHeader>
    </CardHeader>
    <CardImage>
    <img className="recipeImage" src={props.recipe.image}/>
    </CardImage>
    <CardContent width="100px">
        <Media>
            <MediaContent>
                <Title isSize={6}>{props.recipe.title}</Title>
                <h3>Ingredients</h3>
                <ul className="ingredientList">
                    {
                        props.recipe.ingredients.map(ingredient => {
                    return <li key={ingredient}>{ingredient}
                    </li>})
                }
                </ul>
            </MediaContent>
        </Media>
        <p className="directions">
            {props.recipe.directions}
            <br/>
        </p>
    </CardContent>
    <Button isColor="danger" onClick={() => props.addToFav((props.recipe.id),(props.userId))}><FontAwesomeIcon icon="heart" isSize="30px" /></Button>
</Card>

)}