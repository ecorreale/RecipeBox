import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Search from './components/Search';
import Home from './pages/Home';
import Registration from './pages/Register';
import RecipeListPage from './pages/RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/MyRecipes">
              <RecipeListPage />
            </Route>

            <Route path="/signUp">
              <Registration />
            </Route>

            <Route path="/SignIn">
              <Login />
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
}

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useHistory,
//   useLocation,
// } from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       {/* <script src="https://developer.edamam.com/attribution/badge.js"></script> */}
//       <Router>
//         <Switch>
//           <Route path="/recipe">
//             <RecipePage />
//           </Route>

//           <Route path="/signUp">
//             <Registration />
//           </Route>

//           <Route path="/search">
//             <Search />
//           </Route>

//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

export default App;
