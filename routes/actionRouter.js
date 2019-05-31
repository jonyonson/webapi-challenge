const express = require('express');
const actionDb = require('../data/helpers/actionModel.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<h2>Let's do this ish! actions!</h2>`);
});

module.exports = router;
