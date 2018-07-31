import React, { Component } from 'react'
import FavoriteCard from './FavoriteCard'
import APIHandler from '../APIHandler'


export default class RecipeList extends Component {

    constructor() {
        super();
        this.state = {
        recipes: [],
        searchText: ''
    }; 
 }

    refresh = () => {
        APIHandler.getData("favorites?_expand=recipe")
        .then(recipes => {
            console.log(recipes)
            this.setState({ recipes: recipes})
        })
    }


    deleteFromFav = (id) => {
        APIHandler.deleteData(id)
        .then(() => {
            return APIHandler.getData("favorites")
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
                    this.state.recipes.map(recipe => 
                    < FavoriteCard key={recipe.id} recipe={recipe.recipe} deleteFromFav={this.deleteFromFav}/>
                    )
                }
            </React.Fragment>
        )
    }
}