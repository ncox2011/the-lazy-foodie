import React, { Component } from 'react'
import APIHandler from './APIHandler'
import { Redirect, Link } from 'react-router-dom'

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange);
    }

    handleLogin = event => {

        APIHandler
    }

}