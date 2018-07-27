import React, { Component } from 'react'
// import { SearchBar } from 'react'


export default class Search extends Component {
    constructor() {
        super();
        this.state={
            search: ''
        };
    }

    updateSearch(evt) {
        this.setState({search: evt.target.value.substr(0,20)})
    }



    render() {
        let filteredRecipes = this.props.recipes
        return (
            <div>
                <ul>
                    {filteredRecipes.map(recipe => {
                        return <Recipe recipe={recipe}
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