const express = require('express')
const router = express.Router();
const User = require('../models/user');

//get a list of users from db
router.get('/users', (req, res, next) => {
  console.log(req)
  console.log(res)
  res.send(req.body)
  console.log(req.body)
});

router.post('/users', (req, res, next) => {
  User.create(req.body)
    .then( user => {
      res.send(user)
    })
    .catch(next)
})


module.exports = router;