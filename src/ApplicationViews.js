import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Welcome from './Welcome'
import RecipeList from './RecipeList'
import Favorites from './Favorites/FavoriteList'
import AddReview from './Review/AddReview'
import UserList from './UserList'

export default class ApplicationViews extends Component {

    isAuthenticated = () => 
    localStorage.getItem("userInfo") !== null ||
    sessionStorage.getItem("userInfo") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/RecipeList" render={props => {
                    if (this.isAuthenticated()) {
                        return <RecipeList />;
                    } else {
                        return <Login/>
                    }
                }}/>
                <Route exact path='/Favorites' render={props => {
                    if (this.isAuthenticated()) {
                        return <Favorites/>
                    } else {
                        return <Login/>
                    }
                }}/>
                <Route exact path='/AddReview' component={AddReview}/>
                <Route exact path='/UserList' render={props => {
                    if (this.isAuthenticated()) {
                        return <UserList/>
                    } else {
                        return <Login/>
                    }
                }}/>
            </React.Fragment>
        )
    }
}