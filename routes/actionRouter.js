const express = require('express');
const actionDb = require('../data/helpers/actionModel.js');
const router = express.Router();

router.get('/', (req, res) => {
  actionDb
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ erorr: 'There was an error retrieving actions' });
    });
});

module.exports = router;
