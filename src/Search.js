import React, { Component } from 'react'
// import { SearchBar } from 'react'



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
                        name="search"
                        onSearch={this.props.onSearchChange}
                        ref={(input) => this.onHand = input}
                        placeholder="Search..."/>
                <button type="submit" id="submit" className="search-button">Submit</button>
            </form>
                }
            </React.Fragment>
        )
    }

}