const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
  name: {
    type: String,
  },
});

const Equip = mongoose.model('equip', equipmentSchema);

module.exports = { Equip, equipmentSchema };
