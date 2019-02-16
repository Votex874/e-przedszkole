const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

// setting up express app
const app = express();

// setting an frontend root
app.use(express.static('public'))



// initialize routes








// setting server
app.listen(process.env.PORT || 5000, () => console.log('listening on port'))