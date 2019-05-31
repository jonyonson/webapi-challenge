const express = require('express');
const projectDb = require('../data/helpers/projectModel');
const router = express.Router();

router.post('/', (req, res) => {
  const project = req.body;
  projectDb
    .insert(project)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({
        error: 'There was an error saving the project to the database',
      });
    });
});

router.get('/', (req, res) => {
  projectDb
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(projects);
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  projectDb
    .getProjectActions(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Error getting actions for that project id' });
    });
});

router.delete('/:id', (req, res) => {
  projectDb
    .remove(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Error deleting project from the database' });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;

  projectDb
    .update(id, req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error updating the project' });
    });
});

module.exports = router;
