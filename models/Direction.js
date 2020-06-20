const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stepSchema = new Schema({
  order: {
    type: Number,
  },
  direction: {
    type: String,
  },
});

const Direction = mongoose.model('direction', stepSchema);

module.exports = Direction;
