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

 


toggleReview = () => {
this.setState((prevState) => {
    return {visible: !prevState.visible}
})
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
    //Stops default action of form reloading
    
    
    let signedInUser = JSON.parse(localStorage.getItem("userInfo"));
    if (signedInUser === null) {
        signedInUser = JSON.parse(sessionStorage.getItem("userInfo"));
        signedInUser = signedInUser.userId;
    } else {
        signedInUser = signedInUser.userId;
    }
       
            APIHandler.reviewRecipe("favorites", favoriteId, ReviewObject )         
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
                    handleReview ={this.handleReview}
                    toggleReview= {this.toggleReview}
                    visible={this.state.visible}
                    rating={this.state.rating} 
                    onStarClick={this.onStarClick}
                    />
                    )
                }
                </div>
            </React.Fragment>
        )
    }
}