const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

// setting up express app
const app = express();

// setting an frontend root
app.use(express.static('build'))



// initialize routes
app.use('/api', 'routes')







// setting server
app.listen(process.env.PORT || 3000, () => console.log('listening on port'))