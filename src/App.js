import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
   
    <Router>
       
    <div className="App">
      {/* <Switch> */}
      <header>
        <h2>Friends Database</h2>
        <Link to='/login' className='link'>Login.</Link>
        <Link to='/friends' className='link'>Friendlist.</Link>
        <Link to='/friends/add' className='link'>AddFriend.</Link>
        <Link to='/logout' className='link'>Logout.</Link>
      </header>
      <Route exact path='/'><Login/></Route>
      <Route exact path='/login'><Redirect to='/'/></Route>

      <PrivateRoute exact path='/friends' component={FriendList}/>
      <PrivateRoute exact path='/friends/add' component={AddFriend}/>
      <PrivateRoute exact path='/logout'component={Logout}/>
      {/* </Switch> */}
    </div>
    
    </Router>
    
  );
}

export default App;

// * [X] Use the [mockup provided](./login_mockup.png) to build out a simple login component.
// * [X] In `App.js`, add a route to allow this component to be displayed when navigating to `/` or `/login`
// * [X] When submitting your login form, save the token returned to localStorage and redirect to the FriendsList route.