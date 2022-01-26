import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend'


function App() {
  return (
   
    <Router>
       
    <div className="App">
      {/* <Switch> */}
      <header>
        <h2>Friends Database</h2>
        <Link to='/login'>Login.</Link>
        <Link to='/friends'>Friendlist.</Link>
        <Link to='/friends/add' >AddFriend.</Link>
        <Link to='/'>Logout.</Link>
      </header>
      <Route exact path='/'><Login/></Route>
      <Route exact path='/login'><Redirect to='/'/></Route>
      <Route exact path='/friends'><FriendList/> </Route>
      <Route exact path='/friends/add'><AddFriend/></Route>
      {/* </Switch> */}
    </div>
    
    </Router>
    
  );
}

export default App;

// * [X] Use the [mockup provided](./login_mockup.png) to build out a simple login component.
// * [X] In `App.js`, add a route to allow this component to be displayed when navigating to `/` or `/login`
// * [X] When submitting your login form, save the token returned to localStorage and redirect to the FriendsList route.