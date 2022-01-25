import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = ()=>{
    const { push } = useHistory();
    const [credentials, setCredentials] = useState({username: '', password: ''});

    const handleChange = e =>{
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
        .then(res =>{
            console.log('login post:', res)
            localStorage.setItem('token', res.payload)
            push('/friends');
        })
        .catch(err =>{
            console.error(err)
        })
    }

    return (<div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} >
        <div>
        <label htmlFor='username'>Username</label>
        <input name='username' onChange={handleChange} id='username' />
        </div>
  
        <div>
        <label htmlFor='password'>Password</label>
        <input name='password' onChange={handleChange} type='password' id='password' />
        </div>
        <button>Submit</button>
      </form>
      </div>)
  }

  export default Login;
  
// * [X] Use the [mockup provided](./login_mockup.png) to build out a simple login component.
// * [X] In `App.js`, add a route to allow this component to be displayed when navigating to `/` or `/login`
// * [X] When submitting your login form, save the token returned to localStorage and redirect to the FriendsList route.