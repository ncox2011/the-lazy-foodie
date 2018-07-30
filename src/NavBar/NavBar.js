import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'



export default class NavBar extends Component {
    state = {
        search: ''
    };

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     APIHandler....
    // }

    render() {
        return (
            <nav>
                <Link to='/Friends'>Friends</Link>
                <Link to='/RecipeList'>Home</Link>
                {/* <img src="https://s25.postimg.cc/4pspdnfj3/the_foodie_1.jpg" alt="logo" width="200px" height="200px" /> */}
            </nav>
        )
    }
}