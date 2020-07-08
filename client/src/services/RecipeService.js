import axios from 'axios';

const API_URL = '/api/recipes';

export const Create = (newRecipe) => {
  console.log(newRecipe);
  return axios.post(API_URL, newRecipe);
};

export const getAllRecipes = () => {
  return axios.get(API_URL);
};

export const getRecipeById = (id) => {
  return axios.get(API_URL + '/' + id);
};
