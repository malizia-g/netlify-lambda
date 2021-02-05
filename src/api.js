const express = require('express');
const serverless = require ('serverless-http');
var usersRouter = require('./routes/users');

const app = express();
const router = express.Router();

 router.get('/', (req, res) =>
 {
     res.json(
     {
        hello:'h1234add'
     })
 });

 app.use('/.netlify/functions/api',router)
 app.use('/.netlify/functions/api/users', usersRouter);

module.exports = app;
module.exports.handler= serverless(app); 