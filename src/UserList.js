import React from 'react'
import UserProfile from './UserProfile'
import APIHandler from './APIHandler'


export default class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

componentDidMount() {
    let localUser = JSON.parse(localStorage.getItem("userInfo")); // gets localStorage
    let sessionUser = JSON.parse(sessionStorage.getItem("userInfo")); // gets sessionStorage

    APIHandler.getData("profiles")
    .then(profiles => {
        this.setState({ users: profiles})
    })

}

addToFriends = (currentUserId, friendId) => {
        let currentUser = JSON.parse(localStorage.getItem("userInfo"));
        if (currentUser === null) {
            currentUser = JSON.parse(sessionStorage.getItem("userInfo"));
            currentUserId = currentUser.userId
        } else {
            currentUserId = currentUser.userId
        }
            fetch("http://localhost:5002/friends", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: currentUserId,
                    friendId: +friendId,
                })
            }).then(() => {
                    
                alert("Added friend!!")
            })
    }


    render() {
        
        return (
            <React.Fragment>
                <div className="UserList">
                {
                    this.state.users.map(user => 
                    < UserProfile key={user.id} user={user} addToFriends={this.addToFriends}/>
                    )
                }
            </div>
            </React.Fragment>
        )
    }
}