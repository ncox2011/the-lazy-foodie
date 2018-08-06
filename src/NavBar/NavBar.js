import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Navbar, NavbarItem} from 'bloomer'
import 'bulma/css/bulma.css'
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
            <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
                <NavbarItem href='/Favorites'>Favorites</NavbarItem>
                <NavbarItem href='/RecipeList'>Home</NavbarItem>
                {/* <img src="https://s25.postimg.cc/4pspdnfj3/the_foodie_1.jpg" alt="logo" width="200px" height="200px" /> */}
            </Navbar>
        )
    }
}