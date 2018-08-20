import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import APIHandler from './APIHandler'
import { Button } from 'bloomer'
import 'bulma/css/bulma.css';
import './Recipes.css'



export default class RecipeList extends Component {

    constructor() {
        super();
        this.state = {
        recipes: [],
        searchText: '',
        review: ''
    }; 
   this.addToFav = this.addToFav.bind(this)
}
//pulls recipes from database and updates state
    refresh = () => {
        APIHandler.getData("recipes")
        .then(recipes => {
            this.setState({ recipes: recipes})
        })
    }
//splits user input at the ,_ and iterates through array creating the ingredient search property, then concatenates them into ingredientList for search
    findRecipe = (searchText) => {
        let ingredientList = ""
        let itemArray = searchText.split(", ")
        itemArray.forEach(item => {
            let ingredient = `&ingredients_like=${item}`
            ingredientList += ingredient
        })
        APIHandler.getData(`recipes?${ingredientList}`)
        .then(recipes => {
            this.setState({recipes: recipes})
        }).then(() => {
            this.setState({searchText: ""})
        }).then(() => {
            let form = document.getElementById("searchText")
            form.value = ""
        })
    }
//when search field changes update searchText state 
    onSearchChange = event => {
        this.setState({ searchText: event.target.value})
    }
//when button is clicked, run findRecipe function
    handleSubmit = e => {
        e.preventDefault();
        this.findRecipe(this.state.searchText)


    }
//checks for current user to get userId and calls post funtion to add to userFavorites. shows alert to let user know it was saved
    addToFav = (recipeId, userId) => {
    let currentUser = JSON.parse(localStorage.getItem("userInfo"));
    if (currentUser === null) {
        currentUser = JSON.parse(sessionStorage.getItem("userInfo"));
        userId = currentUser.userId
    } else {
        userId = currentUser.userId
    }
        fetch("http://localhost:5002/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                recipeId: +recipeId,
                review: '',
                rating: 0
            })
        }).then(() => {
                
            alert("Added to your favorites")
        })
}
//on page load retrieve all recipes with refresh function
    componentWillMount() {
        this.refresh()
        
    }

    render() {
        
        return (
            <React.Fragment>
                <div className="recipesList">
                <form className="search-form" onSubmit={this.handleSubmit}>
                <label className="is-hidden" htmlFor="search">Find Recipes</label>
                <input type="search"
                        name="search"
                        id="searchText"
                        onChange={this.onSearchChange}
                        placeholder="Search..."/>
                <Button isColor="info" type="submit" id="submit" className="search-button">Submit</Button>
            </form>
                {
                    this.state.recipes.map(recipe => 
                    < RecipeCard key={recipe.id} recipe={recipe} addToFav={this.addToFav}/>
                    )
                }
            </div>
            </React.Fragment>
        )
    }
}