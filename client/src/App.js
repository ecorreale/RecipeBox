import React, { Component } from 'react';

import Search from './components/Search';
import Registration from './pages/Register';
import RecipeListPage from './pages/RecipeList';
import NewRecipePage from './pages/NewRecipe';
import SignIn from './pages/SignIn';
import SignOutPage from './pages/SignOut';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/MyRecipes">
              <RecipeListPage />
            </Route>

            <Route path="/New">
              <NewRecipePage />
            </Route>

            <Route path="/signUp">
              <Registration />
            </Route>

            <Route path="/SignIn">
              <SignIn />
            </Route>

            <Route path="/SignOut">
              <SignOutPage />
            </Route>

            <Route path="/search">
              <Search />
            </Route>

            <Route path="/">
              <HomePage />
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
