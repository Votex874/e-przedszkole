import express from 'express'
const router = express.Router();
import User from '../models/user';

//get a list of users from db
router.get('/users', (req, res, next) => {
  console.log(req)
  console.log(res)
  res.send(req.body)
  console.log(req.body)
});
