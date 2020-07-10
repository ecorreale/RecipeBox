import axios from 'axios';

const API_URL = '/api/recipes';

const CreateRecipe = (
  author,
  title,
  description,
  ingredients,
  prepTime,
  cookTime,
  servings,
  equipment,
  directions
) => {
  console.log('----Recipe Service Axios Call----');

  return axios.post('/api/recipes', {
    author,
    title,
    description,
    ingredients,
    prepTime,
    cookTime,
    servings,
    equipment,
    directions,
  });
};

const getAllRecipes = () => {
  return axios.get(API_URL);
};

const getRecipeById = (id) => {
  return axios.get(API_URL + '/' + id);
};

export default {
  CreateRecipe,
  getAllRecipes,
  getRecipeById,
};
