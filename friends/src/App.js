import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <Link to="/login" className="link">Login</Link>
        <Link to="/protected" className="link">Friends List</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList}/>
        <Route path="/login" component={Login}/>
        <Route component= {Login}/>
      </Switch>
    </div>
  );
}

export default App;
