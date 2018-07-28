import React, { Component } from 'react'
// import { SearchBar } from 'react'
import APIHandler from './APIHandler'
import RecipeCard from './RecipeCard'


export default class Search extends Component {
    
    state = {
        recipes: [],
        filteredRecipes: []
    }

    // updateSearch(evt) {
    //     this.setState({search: evt.target.value.substr(0,20)})
    // }

    
    render() {
        return (
            
            <React.Fragment>
                {
            <form className="search-form" onSubmit={this.props.handleSumbit}>
                <label className="is-hidden" htmlFor="search">Find Recipes</label>
                <input type="search"
                        onChange={this.props.onSearchChange}
                        name="search"
                        ref={(input) => this.onHand = input}
                        placeholder="Search..."/>
                <button type="submit" id="submit" className="search-button">Submit</button>
            </form>
                }
            </React.Fragment>
        )
    }

}