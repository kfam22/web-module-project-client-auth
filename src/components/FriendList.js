import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendList = ()=>{
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        axiosWithAuth()
        .get('/friends')
        .then(res=>{
        setFriends(res.data);
                })
        .catch(err=>{
        console.error(err);
        })
    }, [])

        // console.log('friends', friends)

    return (<div>
    <h1>Friends List</h1>
    <ul>
        {friends.map(friend=>{
            return (<li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>)
        })}
    </ul>
    </div>)
  }

  export default FriendList;

// * [X] Use the [mockup provided](./friendslist_mockup.png) to build out a simple list component made to display all friends.
// * [X] When the component mounts, make a call to the api retrieving all friends. Remember that this is a protected route.
// * [] In `App.js`, add a route to allow this component to be displayed when navigating to `/friends`
// * [ ] In your login component, add code to your submission code the ability to redirect to your friendslist component.