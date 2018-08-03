import React from 'react'
import APIHandler from '../APIHandler'

export default class AddReview extends React.Component {

    state= {
        Review: ""
    }

    handleReviewFieldChange = (event) => {
        const review = {}
        review[event.target.id] = event.target.value
        this.setState(review)
    }
    
    currentFavId = (id) => {
        console.log("currentfavid function called")
        this.setState({
            currentFavId: id
        })
    }
    
   createNewReview = (e) => {
    e.preventDefault()
    let body = {
        review: this.state.Review
    } 
    this.props.handleReview(body, this.props.favoriteId)
   }
    
    
    
render() {
    return (
        <React.Fragment>
        <form className="input-form" onSubmit={this.createNewReview} >
                    <label className="newReview"></label>
                    <input type="text"
                        onChange={this.handleReviewFieldChange}
                        id="Review"
                        name="review"
                        placeholder="Type your review here." />
                    <button type="submit" id="submit" className="savebtn">Save</button>
                </form>
        </React.Fragment>
    )
}
}