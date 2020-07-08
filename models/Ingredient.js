const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  qty: {
    type: Number,
  },

  unit: {
    type: String,
  },

  ingredient: {
    type: String,
  },
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = { Ingredient, ingredientSchema };
