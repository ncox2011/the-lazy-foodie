import React, { Component } from 'react'
// import { SearchBar } from 'react'
import APIHandler from './APIHandler'
import RecipeCard from './RecipeCard'


export default class Search extends Component {
    
    state = {
        recipes: [],
        filteredRecipes: []
    }

    updateSearch(evt) {
        this.setState({search: evt.target.value.substr(0,20)})
    }

    findRecipe = () => {
        APIHandler.getData(`recipes?directions=${this.props.onHand}`)
        .then(recipes => {
            this.setState({recipes: recipes})
        })
    }



    render() {
        let filteredRecipes = this.props.recipes
        return (
            <div>
                <ul>
                    {this.state.filteredRecipes.map(recipe => {
                        return <RecipeCard recipe={recipe}
                        key={recipe.id}/>
                    })}
                </ul>
                <input type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}/>
            </div>
        )
    }
}