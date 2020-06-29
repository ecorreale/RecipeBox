const Direction = require('./Direction');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let db = {};

db = {
  User: require('./User'),
  Role: require('./Role'),
  Recipe: require('./Recipe'),
  Direction: require('./Direction'),
  Equip: require('./Equip'),
  Ingredient: require('./Ingredient'),
};
db.mongoose = mongoose;
db.ROLES = ['user', 'admin', 'moderator'];

module.exports = db;
