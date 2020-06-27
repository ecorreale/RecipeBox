import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Search from './components/Search';
// import Saved from './components/Saved';
import Home from './pages/Home';
import Registration from './pages/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { registered } from 'glyphicons';

function App() {
  return (
    <div>
      <script src="https://developer.edamam.com/attribution/badge.js"></script>
      <Router>
        <Switch>
          <Route path="/Register">
            <Registration />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          <Route path="/api/foo"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
