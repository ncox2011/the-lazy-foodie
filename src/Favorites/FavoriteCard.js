import React from 'react'
import {Card, CardHeader, CardImage, CardContent, Media, Icon, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import '../index.css'
import 'bulma/css/bulma.css';


export default props => {
    let favorite = {}


return (
<Card>
    <CardHeader>
    </CardHeader>
    <CardImage>
    <img className="recipeImage" src={props.favorite.recipe.image}/>
    </CardImage>
    <CardContent>
        <Media>
            <MediaContent>
                <Title isSize={6}>{props.favorite.recipe.title}</Title>
                <h3>Ingredients</h3>
                <ul className="ingredientList">
                    {
                        props.favorite.recipe.ingredients.map(ingredient => {
                    return <li key={ingredient}>{ingredient}
                    </li>})
                }
                </ul>
            </MediaContent>
        </Media>
        <Content>
            {props.favorite.recipe.directions}
            <br/>
        </Content>
    </CardContent>
    <button onClick={() => props.deleteFromFav(props.favorite.id)}>Delete</button>
    <button>Review</button>
</Card>
)}