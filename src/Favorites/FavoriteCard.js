import React from 'react'
import { Card, CardHeader, CardImage, CardContent, Media, Icon, Button, Image, MediaContent, Title, Subtitle, Content } from 'bloomer'
import 'bulma/css/bulma.css';
import '../index.css'
import Reviews from '../Review/Reviews'
import AddReview from '../Review/AddReview'
import { Link } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'


export default class FavoriteCard extends React.Component {
    state = {
        rating: 1
    }
    //This handles the click on the star rating
    onStarClick = (nextValue, prevValue, name) => {
        console.log(nextValue, prevValue, name)
      this.setState({
          rating: nextValue
        });
    }
//prints the individual favorite cards
render() {
    return (
        <React.Fragment>
            <Card className="FavCard" isDisplay="inline-flex">
                <CardHeader>
                </CardHeader>
                <CardImage>
                    <img className="recipeImage" src={this.props.favorite.recipe.image} />
                </CardImage>

                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.rating}
                    onStarClick={this.onStarClick}
                    />
                <CardContent>
                    <Media>
                        <MediaContent>
                            <Title isSize={6}>{this.props.favorite.recipe.title}</Title>
                            <h3>Ingredients</h3>
                            <ul className="ingredientList">
                                {
                                    this.props.favorite.recipe.ingredients.map(ingredient => {
                                        return <li key={ingredient}>{ingredient}
                                        </li>
                                    })
                                }
                            </ul>
                        </MediaContent>
                    </Media>
                    <p className="directions">
                        {this.props.favorite.recipe.directions}
                        <br />
                    </p>
                </CardContent>
                <Button isColor="danger" onClick={() => this.props.deleteFromFav(this.props.favorite.id)}>Delete</Button>
            </Card>                 
            <Reviews toggleReview={this.props.toggleReview} handleReview={this.props.handleReview} favoriteReview={this.props.favorite.review}/>
            <AddReview toggleReview={this.props.toggleReview} visible={this.props.visible} favoriteId={this.props.favorite.id} handleReview={this.props.handleReview}/>
        </React.Fragment>
    )
  }
}