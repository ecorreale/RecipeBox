const mongoose = require('mongoose');

module.exports = {
  User: require('./User'),
  Recipe: require('./Recipe').Recipe,
  Direction: require('./Direction').Direction,
  Equip: require('./Equip').Equip,
  Ingredient: require('./Ingredient').Ingredient,
};
