import React from 'react'
import APIHandler from '../APIHandler'

export default class AddReview extends React.Component {

    state= {
        newReview: ""
    }
    handleReviewFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    
    handleReview = (e) => {
            //Stops default action of form reloading
            e.preventDefault()
    
            let signedInUser = JSON.parse(localStorage.getItem("userInfo"));
            if (signedInUser === null) {
                signedInUser = JSON.parse(sessionStorage.getItem("userInfo"));
                signedInUser = signedInUser.userId;
            } else {
                signedInUser = signedInUser.userId;
            }

                
                let favoriteId= this.state.favoriteId
                let recipeReview = this.state.review
                let body = {
                    review: recipeReview,

                }
               
                APIHandler.reviewRecipe("favorites", favoriteId, body )         
                .then(() => {
                    this.props.printReviews()
                }).then(() => {
                    this.props.history.push('/Favorites')
                })
            }
    
    
render() {
    return (
        <React.Fragment>
        <form className="input-form" onSubmit={this.handleNewReview}>
        <label className="newReview">Write a Review</label>
        <input type="text"
                onChange={this.handleReviewFieldChange}
                id="reviewText"
                name="review"
                value={this.state.review}
                placeholder=""/>
        <button type="submit" id="submit" className="savebtn">Save</button>
        </form>
        </React.Fragment>
    )
}
}