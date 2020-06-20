const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  amount: {
    type: String,
  },
  name: {
    type: String,
  },
});

const Ingredient = mongoose.model('ingredient', ingredientSchema);

module.exports = Ingredient;
