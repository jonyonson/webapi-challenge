const express = require('express');
const actionDb = require('../data/helpers/actionModel.js');
const router = express.Router();

router.post('/', (req, res) => {
  const action = req.body;
  actionDb
    .insert(action)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      res.status(500).json({
        error: 'There was an error saving the action to the database',
      });
    });
});

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

router.delete('/:id', (req, res) => {
  actionDb
    .remove(req.params.id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error deleting the action' });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedAction = req.body;
  actionDb
    .update(id, updatedAction)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(err => {
        res.status(500).json({ error: 'Error updating action' });
      });
    });
});

module.exports = router;
