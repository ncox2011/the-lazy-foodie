import React from 'react'
import { Card, CardHeader, CardImage, CardContent, Media, Icon, Image, MediaContent, Title, Subtitle, Content } from 'bloomer'
import '../index.css'
import 'bulma/css/bulma.css';
import Reviews from '../Review/Reviews'
import AddReview from '../Review/AddReview'
import { Link } from 'react-router-dom'


export default props => {
    let favorite = {}


    return (
        <React.Fragment>
            <Card>
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
                    <Content>
                        {props.favorite.recipe.directions}
                        <br />
                    </Content>
                </CardContent>
                <button onClick={() => props.deleteFromFav(props.favorite.id)}>Delete</button>
                <button>Reviews</button>
            </Card>
            <Card>
                <Content>
                    {props.favorite.review}
                </Content>
            </Card>
            <React.Fragment>
                <form className="input-form" onSubmit={props.handleReview} >
                    <label className="newReview"></label>
                    <input type="text"
                        onChange={props.handleReviewFieldChange}
                        id="reviewText"
                        name="review"
                        placeholder="Type your review here." />
                    <button type="submit" id="submit" className="savebtn" onClick={() => props.currentFavId(props.favorite.id)}>Save</button>
                </form>
            </React.Fragment>
        </React.Fragment>
    )
}