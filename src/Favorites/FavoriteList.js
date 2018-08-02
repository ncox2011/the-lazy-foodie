import React, { Component } from 'react'
import FavoriteCard from './FavoriteCard'
import APIHandler from '../APIHandler'



export default class FavoriteList extends Component {

    constructor() {
        super();
        this.state = {
        favorites: [],
        searchText: ''
    }; 
 }

 getUserFavorites = () => {
     let localUser = JSON.parse(localStorage.getItem("userInfo")); // gets localStorage
     let sessionUser = JSON.parse(sessionStorage.getItem("userInfo")); // gets sessionStorage

    if (sessionUser !== null) { // if sessionStorage is populated with data (ie. user has logged in with sessionStorage)
    //   console.log(APIHandler.getFavUserId(sessionUser.userId))
    //   .then((userId) => {
      return APIHandler.getData(`favorites?userId=${sessionUser.userId}&_expand=recipe`)
   
      .then(userFavorites => {
          console.log(userFavorites)
          this.setState({ 
              favorites: userFavorites
          })
      })

    } else if (localUser !== null) { // if localStorage is populated with data (ie. user has logged in with localStorage)
          APIHandler.getData(`favorites?userId=${localUser.userId}&_expand=recipe`)

      .then(userFavorites => {
          this.setState({ 
              favorites: userFavorites
          })
      })
    }
  };

    // refresh = () => {
    //     APIHandler.getData("reviews")
    //     .then(reviews => {
    //         this.setState({ 
    //             reviews: reviews
    //         })
    //     })
    // }


    deleteFromFav = (favId) => {
        let localUser = JSON.parse(localStorage.getItem("userInfo")); // gets localStorage
     let sessionUser = JSON.parse(sessionStorage.getItem("userInfo")); // gets sessionStorage

    if (sessionUser !== null) {
        return APIHandler.deleteData("favorites", favId)
        .then(() => {
            return APIHandler.getData(`favorites?userId=${sessionUser.userId}&_expand=recipe`)
            }).then(allFavorites => {
                console.log("allfavorites", allFavorites)
                this.setState({
                    favorites: allFavorites
            })
        })
    }  else if (localUser !== null) { // if localStorage is populated with data (ie. user has logged in with localStorage)
        return APIHandler.getData(`favorites?userId=${localUser.userId}&_expand=recipe`)

    .then(userFavorites => {
        console.log("userfavorites", userFavorites)
        this.setState({ 
            favorites: userFavorites
        })
    })
  }
};

handleReviewFieldChange = (event) => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
}

currentFavId = (id) => {
    console.log("currentfavid function called")
    this.setState({
        currentFavId: id
    })
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
        
        
        let favoriteId= this.state.currentFavId
        // console.log(favoriteId)
        let recipeReview = document.getElementById('reviewText').value
        console.log(recipeReview)
        let body = {
                review: recipeReview,

            }
           
            APIHandler.reviewRecipe("favorites", favoriteId, body )         
            .then(() => {
                this.getUserFavorites()
            })
        }

    componentDidMount() {
        // this.refresh()
        this.getUserFavorites()
        
    }

    render() {
        
        return (
            <React.Fragment>
            <title>Your Favorites</title>
                <div>
                {
                    this.state.favorites.map(favorite => 
                    < FavoriteCard key={favorite.id} 
                    favorite={favorite} 
                    deleteFromFav={this.deleteFromFav}
                    handleReview= {this.handleReview}
                    handleReviewFieldChange={this.handleReviewFieldChange}
                    currentFavId={this.currentFavId}/>
                    )
                }
                </div>
            </React.Fragment>
        )
    }
}