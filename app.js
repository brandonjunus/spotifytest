const express = require('express');
const morgan = require('morgan');
var app = express();

// MIDDLE WARE

app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))