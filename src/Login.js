import React, { Component } from 'react'
import APIHandler from './APIHandler'
import { Redirect, Link } from 'react-router-dom'
import 'bulma/css/bulma.css';

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

        APIHandler.getData(`users?email=${this.state.email}`)
        .then(user => {
            if (user.length > 0 && this.state.password == user[0].password) {
                this.setState({ userId: user[0].id});
            } else {
                alert(
                    "Looks like you may have entered the wrong login information"
                )
            }
        })
        .then(() => {
            const checkbox = document.getElementById("checkbox");
            if (checkbox.checked) {
              if (this.state.userId) {
              localStorage.setItem(
                "userInfo",
                JSON.stringify({
                  email: this.state.email,
                  password: this.state.password,
                  userId: this.state.userId
                })
              );
            }} else {
              if (this.state.userId) {
              sessionStorage.setItem(
                "userInfo",
                JSON.stringify({
                  email: this.state.email,
                  password: this.state.password,
                  userId: this.state.userId
                })
              );
            }}
          });
      };
      render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h2> Please Login </h2>
                 <label>Email</label>
                 <input 
                 id="email"
                 type="email" 
                 placeholder="Email Address" 
                 onChange = {this.handleFieldChange} />
                 <label>Password</label>
                 <input 
                 id="password"
                 type="password" 
                 placeholder="Password" 
                 onChange = {this.handleFieldChange}/>
                 <label> Remember Me</label>
                 <input type="checkbox" id="checkbox" />
                 <button 
                 isColor='primary' 
                 type="submit">
                 <Link to={{
                pathname: "/RecipeList"}}>Submit
                </Link>
                </button>
            </form>
        )
    }
    }