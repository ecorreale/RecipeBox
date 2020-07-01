const mongoose = require('mongoose');

module.exports = {
  User: require('./User'),
  Recipe: require('./Recipe'),
  Direction: require('./Direction'),
  Equip: require('./Equip'),
  Ingredient: require('./Ingredient'),
};
