const express = require('express')
const router = express.Router();
const User = require('../models/user');

//get a list of users from db
router.get('/users', (req, res, next) => {
  User.find({}).then( users => {
    res.send(users)
  })
});

router.post('/users', (req, res, next) => {
  User.create(req.body)
    .then( user => {
      res.send(user)
    })
    .catch(next)
})

router.put('/users/:id', (req, res, next) => {
  // Szukamy usera z naszym id w roucie zeby zmienić mu parametry
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then( () => {
    // szukamy danego usera zeby zobaczyc czy rzeczywiscie dostal update
    User.findOne({ _id: req.params.id }).then( user => {
      res.send(user)
    })
  })
})


module.exports = router;