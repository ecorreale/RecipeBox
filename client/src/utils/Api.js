import axios from 'axios';

app.get('/api/edamam', (req, res) => {
  console.log(req.query);
  axios
    .get('https://api.edamam.com/search?q=' + req.query.q)
    .then((response) => {
      // console.log(response.data)
      res.json(response.data);
    });
});

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
};
