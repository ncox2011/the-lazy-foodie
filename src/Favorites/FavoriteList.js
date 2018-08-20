import React, { Component } from 'react'
import FavoriteCard from './FavoriteCard'
import APIHandler from '../APIHandler'




export default class FavoriteList extends Component {

    constructor() {
        super();
        this.state = {
        favorites: [],
        searchText: '',
        visible: false,
    }; 
 }
//on button click show/hide review input field
toggleReview = () => {
this.setState((prevState) => {
    return {visible: !prevState.visible}
})
}

//check for current user and print their favorites list only
 getUserFavorites = () => {
     let localUser = JSON.parse(localStorage.getItem("userInfo")); // gets localStorage
     let sessionUser = JSON.parse(sessionStorage.getItem("userInfo")); // gets sessionStorage

    if (sessionUser !== null) { // if sessionStorage is populated with data (ie. user has logged in with sessionStorage)
      return APIHandler.getData(`favorites?userId=${sessionUser.userId}&_expand=recipe`)
   
      .then(userFavorites => {
          console.log(userFavorites)
          this.setState({ 
              favorites: userFavorites
          })
      })

    } else if (localUser !== null) { // if localStorage is populated with data (ie. user has logged in with localStorage)
          APIHandler.getData(`favorites?userId=${localUser.userId}&_expand=recipe`)
//set state of favorites to this users favorites
      .then(userFavorites => {
          this.setState({ 
              favorites: userFavorites
          })
      })
    }
  };

//remove from favorite list using that favorite id
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


handleReview = (ReviewObject, favoriteId) => {
   //checks to see if usesr is signed in    
    let signedInUser = JSON.parse(localStorage.getItem("userInfo"));
    if (signedInUser === null) {
        signedInUser = JSON.parse(sessionStorage.getItem("userInfo"));
        signedInUser = signedInUser.userId;
    } else {
        signedInUser = signedInUser.userId;
    }
       //runs the patch function on favorites to add review
            APIHandler.reviewRecipe("favorites", favoriteId, ReviewObject )         
            .then(() => {
                //after review is added, refresh user favorites
                this.getUserFavorites()
            })
  
    }

//on page load, get users favorite recips
    componentDidMount() {
        this.getUserFavorites()       
    }

    render() {
        
        return (
            <React.Fragment>
                <div className="favDiv">
            <h1 className="favoriteh1">Your Favorite Recipes</h1>
                <div>
                {
                    this.state.favorites.map(favorite => 
                    < FavoriteCard key={favorite.id} 
                    favorite={favorite} 
                    deleteFromFav={this.deleteFromFav}
                    handleReview ={this.handleReview}
                    toggleReview= {this.toggleReview}
                    visible={this.state.visible}
                    // rating={this.state.rating} 
                    />
                    )
                }
                </div>
                </div>
            </React.Fragment>
        )
    }
}