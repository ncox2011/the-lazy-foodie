import React from 'react'
import { Card, CardHeader, CardImage, CardContent, Media, Icon, Button, Image, MediaContent, Title, Subtitle, Content } from 'bloomer'
import '../index.css'
import 'bulma/css/bulma.css';
import Reviews from '../Review/Reviews'
import AddReview from '../Review/AddReview'
import { Link } from 'react-router-dom'


export default props => {
    let favorite = {}


    return (
        <React.Fragment>
            <Card className="FavCard" isDisplay="inline-flex">
                <CardHeader>
                </CardHeader>
                <CardImage>
                    <img className="recipeImage" src={props.favorite.recipe.image} />
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
                                        </li>
                                    })
                                }
                            </ul>
                        </MediaContent>
                    </Media>
                    <p className="directions">
                        {props.favorite.recipe.directions}
                        <br />
                    </p>
                </CardContent>
                <Button isColor="danger" onClick={() => props.deleteFromFav(props.favorite.id)}>Delete</Button>
            </Card>
            <Reviews toggleReview={props.toggleReview} handleReview={props.handleReview} favoriteReview={props.favorite.review}/>
            <AddReview visible={props.visible} favoriteId={props.favorite.id} handleReview={props.handleReview}/>
        </React.Fragment>
    )
}