import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Navbar, NavbarItem, NavbarStart, NavbarEnd} from 'bloomer'
import 'bulma/css/bulma.css'
import './NavBar.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)



export default class NavBar extends Component {
    state = {
        search: ''
    };

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
                <NavbarStart><img className="navImg" src="https://s25.postimg.cc/om1ljni1b/lazyfoodie2.jpg" alt="logo" width="300px" height="10px" /></NavbarStart>
                <NavbarEnd>
                    <NavbarItem href='/UserList'>Add Friends</NavbarItem>
                    <NavbarItem href='/Favorites'>Favorites</NavbarItem>
                    <NavbarItem href='/RecipeList'>Home</NavbarItem>
                    <NavbarItem href='/'> 
                        <FontAwesomeIcon icon="user" isSize="100px" />
                    </NavbarItem>
                </NavbarEnd>
            </Navbar>
        )
    }
}