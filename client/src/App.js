import React from 'react';
import './App.css';
import Search from './components/Search';
import Saved from './components/Saved';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/saved">Saved</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
