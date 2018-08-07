import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Navbar, NavbarItem, NavbarStart, NavbarEnd} from 'bloomer'
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
                <NavbarStart><img className="navImg" src="https://s25.postimg.cc/p98rxv633/foodiesnippet.jpg" alt="logo" width="300px" height="10px" /></NavbarStart>
                <NavbarEnd>
                    <NavbarItem href='/Favorites'>Favorites</NavbarItem>
                    <NavbarItem href='/RecipeList'>Home</NavbarItem>
                </NavbarEnd>
            </Navbar>
        )
    }
}