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


module.exports = router;