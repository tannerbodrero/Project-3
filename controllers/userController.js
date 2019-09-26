const db = require("../models");

module.exports = {
  
  findByEmail: function(req, res) {
    db.User
      .findOne({ email: req.params.email}) 
      .populate("items")
        
      //   function(err, User) {
      //   if (err) {
      //     res.status(422).json(err)} 
      //     res.json(User);
      // }
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      },
  
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};