const db = require('../models');

// Defining methods for the recipesController
module.exports = {
  findAll: function (req, res) {
    console.log('Recipe Controller: findAll');
    db.Recipe.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    console.log('Recipe Controller: findById()');
    db.Recipe.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    console.log('Recipe Controller: Create()');
    console.log(req.body);
    // res.json(req.body);
    db.Recipe.create(req.body)
      .then(function (dbModel) {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
    // .catch(function(err) {res.status(422)});
  },

  update: function (req, res) {
    console.log('Recipe Controller: Update()');
    console.log('objectID', req.params.id);
    console.log(req.body);
    // db.recipe
    //   .findOneAndUpdate({ _id: req.params.id }, req.body)
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    console.log('Recipe Controller: remove()');
    console.log('objectID', req.params.id);

    // db.recipe
    //   .findById({ _id: req.params.id })
    //   .then((dbModel) => dbModel.remove())
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
  },
};
