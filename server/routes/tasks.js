const express = require('express');
const { body } = require('express-validator');
const Task = require('../models/Task');
const validate = require('../middlewares/validation');
const errorHandler = require('../helpers/errorHandler');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch (error) {
    errorHandler(res, error);
  }
});

router.post(
  '/',
  body('title').isString().notEmpty().withMessage('Title must be a non-empty string'),
  validate,
  async (req, res) => {
    try {
      const task = { title: req.body.title, done: false };
      const newTask = await Task.add(task);
      res.json(newTask);
    } catch (error) {
      errorHandler(res, error);
    }
  },
);

router.put(
  '/:id',
  body('title').exists().isString().withMessage('Title, if provided, must be a string'),
  body('done').exists().isBoolean().withMessage('Done, if provided, must be a boolean'),
  validate,
  async (req, res) => {
    try {
      const task = await Task.get(req.params.id);
      if (task) {
        const updatedTask = { title: req.body.title, done: req.body.done };
        const result = await Task.update(req.params.id, updatedTask);
        res.json(result);
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      errorHandler(res, error);
    }
  },
);

module.exports = router;
