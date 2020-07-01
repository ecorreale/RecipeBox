import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Search from './components/Search';
import Home from './pages/Home';
import Registration from './pages/Register';
import RecipePage from './pages/RecipePage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <script src="https://developer.edamam.com/attribution/badge.js"></script> */}
      <Router>
        <Switch>
          <Route path="/recipe">
            <RecipePage />
          </Route>

          <Route path="/signUp">
            <Registration />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
