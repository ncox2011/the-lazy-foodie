import React from 'react'


export default class AddReview extends React.Component {

    state= {
        newReview: ""
    }
    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    
    handleNewReview = (e) => {
            //Stops default action of form reloading
            e.preventDefault()
    
            let reviewInput = document.getElementById("reviewText").value
            let signedInUser = JSON.parse(localStorage.getItem("userInfo"));
            if (signedInUser === null) {
                signedInUser = JSON.parse(sessionStorage.getItem("userInfo"));
                signedInUser = signedInUser.userId;
            } else {
                signedInUser = signedInUser.userId;
            }
    
    
            const newReview = {
                userId: signedInUser,
                message: reviewInput
            }
    
            APIHandler.addData("reviews", newReview)
                .then(() => {
                    this.props.refresh()
                })
    
        }
render() {
    return (
        <React.Fragment>
        <form className="input-form" onSubmit={}>
        <label className="newReview">Write a Review</label>
        <input type="text"
                onChange={props.handleFieldChange}
                id="reviewText"
                name="review"
                placeholder=""/>
        <button type="submit" id="submit" className="savebtn">Save</button>
        </form>
        </React.Fragment>
    )
}
}