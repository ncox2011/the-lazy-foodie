import React from 'react'
import APIHandler from '../APIHandler'

export default class AddReview extends React.Component {

    state= {
        Review: ""
    }

    //gets the review text from the review input field and sets state
    handleReviewFieldChange = (event) => {
        const review = {}
        review[event.target.id] = event.target.value
        this.setState(review)
    }
    
    //gets the id of the current card 
        currentFavId = (id) => {
        console.log("currentfavid function called")
        this.setState({
            currentFavId: id
        })
    }
   
    //on event, sets body equal to the input field text and passes the body and id in as parameters
   createNewReview = (e) => {
    e.preventDefault()
    let body = {
        review: this.state.Review
    } 
    this.props.handleReview(body, this.props.favoriteId)
    this.props.toggleReview
   }
 
    
    
    
render() {
    //if statement for the toggle function on the addReview button
    if(this.props.visible){

        return (
            <React.Fragment>
        <form  onSubmit={this.createNewReview} >
        {this.props.visible}
                    <label className="newReview"></label>
                    <input type="text"
                        onChange={this.handleReviewFieldChange}
                        id="Review"
                        name="review"
                        value={this.props.favoriteReview}
                        placeholder="Type your review here." />
                    <button type="submit" id="submit" className="savebtn" >Save</button>
                </form>
        </React.Fragment>
    )
} else {
    return null
}
}
}