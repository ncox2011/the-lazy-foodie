import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import APIHandler from './APIHandler'
import { Button } from 'bloomer'
import 'bulma/css/bulma.css';



export default class RecipeList extends Component {

    constructor() {
        super();
        this.state = {
        recipes: [],
        searchText: ''
    }; 
   this.addToFav = this.addToFav.bind(this)
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

    onSearchChange = event => {
        this.setState({ searchText: event.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.findRecipe()

    }



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
                recipeId: +recipeId
            })
        }).then(() => {
                
            alert("Added to your favorites")
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
                        // ref={(input) => this.onHand = input}
                        placeholder="Search..."/>
                <Button isColor="info" type="submit" id="submit" className="search-button">Submit</Button>
            </form>
                {
                    this.state.recipes.map(recipe => 
                    < RecipeCard key={recipe.id} recipe={recipe} addToFav={this.addToFav}/>
                    )
                }
            </React.Fragment>
        )
    }
}