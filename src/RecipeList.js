import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import APIHandler from './APIHandler'
import Search from './Search'


export default class RecipeList extends Component {

    constructor() {
        super();
        this.state = {
        recipes: [],
        searchText: ''
    }; 
    // this.onSearchChange = this.onSearchChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.filteredRecipes = this.filteredRecipes.bind(this)
}

    refresh = () => {
        APIHandler.getData("recipes")
        .then(recipes => {
            this.setState({ recipes: recipes})
        })
    }

    findRecipe = (searchText) => {
        APIHandler.getData(`recipes?q=${this.state.searchText}`)
        .then(recipes => {
            console.log("this is the find recipe recipe", recipes)
            this.setState({recipes: recipes})
        })
    }

    filteredRecipes = (e) => {
        // console.log("filtered gets called")
        let updatedRecipes = this.state.recipes

    //     updatedRecipes = updatedRecipes.map(recipe => {
    //         console.log('recipe.ingredients', recipe.ingredients)
    //         if (recipe.ingredients.includes(this.state.searchText)) {
    //             console.log("this recipes includes soy", recipe)
    //             return recipe
    //         }
    //     }) 
    //     this.setState({recipes: updatedRecipes})
    // }

        updatedRecipes = updatedRecipes.map(recipe => {
            // for(var ingredients in recipes) {
            //     if (ingredients === 'ingredients'){
                   let searchResults = recipe.ingredients.map(ingredient => {
                        console.log("should be 1 ingredient", ingredient)
                        if(ingredient.includes(this.state.searchText)) { 
                            console.log("the 2nd if statement is true",recipe)
                            return recipe
                        }
                console.log("search results", searchResults)
                return searchResults
            })

        })
        console.log(updatedRecipes)
        this.setState({recipes: updatedRecipes})
    }

   

    onSearchChange = event => {
        this.setState({ searchText: event.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.findRecipe()
        // this.filteredRecipes()
        // e.currentTarget.resethandleSumbit()
    }

    componentWillMount() {
        this.refresh()
        console.log(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <form className="search-form" onSubmit={this.handleSubmit}>
                <label className="is-hidden" htmlFor="search">Find Recipes</label>
                <input type="search"
                        name="search"
                        onChange={this.onSearchChange}
                        // ref={(input) => this.onHand = input}
                        placeholder="Search..."/>
                <button type="submit" id="submit" className="search-button">Submit</button>
            </form>
                {
                    this.state.recipes.map(recipe => 
                    < RecipeCard key={recipe.id} recipe={recipe}>
                        {recipe.title}
                        {recipe.directions}
                        {recipe.ingredients}
                        {recipe.image}
                        {recipe.prepTime}
                    </RecipeCard>
                    )
                }
            </React.Fragment>
        )
    }
}