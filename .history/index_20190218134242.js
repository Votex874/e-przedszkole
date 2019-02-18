const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/userRestAPI')
const port = 3000;

// setting up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/kindergarden', { useNewUrlParser: true });

// setting an frontend root
app.use(express.static('build'))

app.use(bodyParse.json());

// initialize routes
app.use('/api', routes)

 
// error handling middleware
app.use( (err, req, res, next) => {
  console.log(err)
  res.status(422).send({ error: err.message })
})

// setting server
app.listen(process.env.PORT || port, () => console.log(`listening on port ${port}`))