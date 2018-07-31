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
            this.setState({ recipes: recipes})
        })
    }

    // findRecipe = (searchText) => {
    //     APIHandler.getData(`favorites?_expand=recipeq=${this.state.searchText}`)
    //     .then(recipes => {
    //         console.log("this is the find recipe recipe", recipes)
    //         this.setState({recipes: recipes})
    //     })
    // }

    // onSearchChange = event => {
    //     this.setState({ searchText: event.target.value})
    // }

    handleSubmit = e => {
        e.preventDefault();
        // this.findRecipe()

    }

    deleteFromFav = (id) => {
        APIHandler.deleteData("favorites", id)
        .then(() => {
            return APIHandler.getData("events")
        })
    }


   

    componentWillMount() {
        this.refresh()
        
    }

    render() {
        
        return (
            <React.Fragment>
                <form className="search-form" onSubmit={this.handleSubmit}>
                <label className="is-hidden" htmlFor="search">Find Recipes</label>
                <input type="search"
                        name="search"
                        onChange={this.onSearchChange}
                        placeholder="Search..."/>
                <button type="submit" id="submit" className="search-button">Submit</button>
            </form>
                {
                    this.state.recipes.map(recipe => 
                    < FavoriteCard key={recipe.id} recipe={recipe} />
                    )
                }
            </React.Fragment>
        )
    }
}