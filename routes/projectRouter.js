const express = require('express');
const projectDb = require('../data/helpers/projectModel');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<h2>Let's do this ish! projects!</h2>`);
});

module.exports = router;
