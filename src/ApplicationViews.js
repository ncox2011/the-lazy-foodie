import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={Register} />
                <Route exact path="/Login" component={Login} />
            </React.Fragment>
        )
    }
}