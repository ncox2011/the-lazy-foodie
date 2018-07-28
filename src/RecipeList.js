import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import APIHandler from './APIHandler'
import Search from './Search'


export default class RecipeList extends Component {

    state = {
        recipes: [],
        searchText: ''
    }

    refresh = () => {
        APIHandler.getData("recipes")
        .then(recipes => {
            this.setState({ recipes: recipes})
        })
    }

    findRecipe = (onHand) => {
        APIHandler.getData(`recipes?directions=${this.props.onHand}`)
        .then(recipes => {
            this.setState({recipes: recipes})
        })
    }

    onSearchChange = event => {
        this.setState({ searchText: event.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText)
        e.currentTarget.reset()
    }

    componentDidMount() {
        this.refresh()
    }

    render() {
        return (
            <React.Fragment>
                <Search onSearch={this.findRecipe} />
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