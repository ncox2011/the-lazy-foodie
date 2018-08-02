import React from 'react'
import {Card, Content} from 'bloomer'
import '../index.css'
import 'bulma/css/bulma.css';
import {Link} from 'react-router-dom'



export default props => {
    let review = {}
    
    return (
        <Card>
            <Content>
                {props.favorite.recipe.reviews}
            </Content>
        <Link className="card-link"
        to={{
            pathname: `/favorites/${review.id}/AddReview`,
            state: {reviews: props.reviews }
        }}>
            Add Review
            </Link>
        </Card>
    )
}