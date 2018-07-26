import React, { Component } from 'react'
import ApplicationViews from './ApplicationViews'
import NavBar from './NavBar/NavBar'


export default class TheLazyFoodie extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}