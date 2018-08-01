import React, { Component } from 'react'
import FavoriteCard from './FavoriteCard'
import APIHandler from '../APIHandler'


export default class RecipeList extends Component {

    constructor() {
        super();
        this.state = {
        favorites: [],
        searchText: ''
    }; 
 }

    refresh = () => {
        APIHandler.getData("favorites?_expand=recipe")
        .then(favorites => {
            this.setState({ 
                favorites: favorites
            })
        })
    }


    deleteFromFav = (favId) => {
        APIHandler.deleteData("favorites", favId)
        .then(() => {
            return APIHandler.getData("favorites?_expand=recipe")
            }).then(allFavorites => {
                this.setState({
                    favorites: allFavorites
            })
        })
    }


    componentWillMount() {
        this.refresh()
        
    }

    render() {
        
        return (
            <React.Fragment>
            <title>Your Favorites</title>
                {
                    this.state.favorites.map(favorite => 
                    < FavoriteCard key={favorite.id} favorite={favorite} deleteFromFav={this.deleteFromFav}/>
                    )
                }
            </React.Fragment>
        )
    }
}