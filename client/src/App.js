import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Recipe from './pages/Recipe';
import Registration from './pages/Register';
import RecipeListPage from './pages/RecipeList';
import NewRecipePage from './pages/NewRecipe';
import SignIn from './pages/SignIn';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const HEAD = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <HEAD />

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

            <Route path="/Recipe/:id" component={Recipe}>
              {/* <Recipe /> */}
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
