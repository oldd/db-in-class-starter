const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.verb('/path', controllers.method);

module.exports = router;
