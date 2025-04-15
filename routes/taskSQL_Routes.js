const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskSQL_Controller');
const authenticate = require('../middlewares/authMiddleware');
const { body } = require('express-validator');

router.use(authenticate);

router.post(
    '/tasks_create',
    [
      body('title').notEmpty().withMessage('Title is required'),
      body('description').notEmpty().withMessage('Description is required'),
      body('dueDate').isISO8601().withMessage('Due date must be in ISO 8601 format (YYYY-MM-DD)'),
      body('status').optional().isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status'),
    ],
    taskController.createTask
  );

// router.post('/tasks', taskController.createTask);
router.get('/tasks_get', taskController.getTasks);
router.get('/tasks_get_by_status_duedate', taskController.getTasks_by_status_duedate);
router.put('/tasks_update/:id', taskController.updateTask);
router.delete('/tasks_delete/:id', taskController.deleteTask);

router.get('/tasks_get_status', taskController.getTasks_bystatus);
router.get('/getTasks_pagination', taskController.getTasks_pagination);

module.exports = router;