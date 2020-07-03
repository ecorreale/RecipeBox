import axios from 'axios';

export default {
  // Gets all recipes
  getRecipes: function () {
    return axios.get('/api/recipes');
  },
  // Gets the recipe with the given id
  getRecipe: function (id) {
    return axios.get('/api/recipes/' + id);
  },
  // Deletes the recipe with the given id
  deleteRecipe: function (id) {
    return axios.delete('/api/recipes/' + id);
  },
  // Saves a recipe to the database
  saveRecipe: function (recipeData) {
    return axios.post('/api/recipes', recipeData);
  },
  // searchEdamam: function (query) {
  //   return axios.get(
  //     'https://api.edamam.com/search?q=' +
  //       query +
  //       '&app_id=' +
  //       edamam_app_key +
  //       '&app_key=' +
  //       edamam_app_id
  //   );
  // },
};
