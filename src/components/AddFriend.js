import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const AddFriend = ()=>{
    const { push } = useHistory();
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    console.log('form:', form)

    const handleSubmit = e =>{
        e.preventDefault();
        
        axiosWithAuth()
        .post('/friends', form)
        .then(res=>{
            console.log('submit response:', res);
            push('/friends');
        })
        .catch(err=>{
            console.error(err)
        })
        
    }
    return (<div>
    <h2>AddFriend</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Friend Name:</label>
            <input onChange={handleChange} name='name'/>
        </div>
        <div>
            <label htmlFor='age'>Friend Age:</label>
            <input onChange={handleChange} name='age'/>
        </div>
        <div>
            <label htmlFor='email'>Friend Email:</label>
            <input onChange={handleChange} name='email'/>
        </div>
        <button>Submit</button>
    </form>
    </div>)
  }

  export default AddFriend;

// * [X] Use the [mockup provided](./addfriends_mockup.png) to build out a simple component allowing you to collect data to add in a new friend.
// * [X] The component should include a form with inputs for each friend attribute and a submit button.
// * [ ] When submitting the form, make a call to the approprate api endpoint with your new friend data. Remember that this is a protected route.
// * [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/friends/add`.