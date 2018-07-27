import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
import APIHandler from './APIHandler'
import Search from './Search'


export default class RecipeList extends Component {

    state = {
        recipes: []
    }

    refresh = () => {
        APIHandler.getData("recipes")
        .then(recipes => {
            this.setState({ recipes: recipes})
        })
    }

    componentDidMount() {
        this.refresh()
    }

    render() {
        return (
            <React.Fragment>
                <Search/>
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