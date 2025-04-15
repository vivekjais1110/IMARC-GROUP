const  Task = require('../models/taskSQL');
const { validationResult } = require('express-validator');

exports.createTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
 
    try {
    
    const { title, description, dueDate, status } = req.body;

    const duplicate = await Task.findOne({ where: { userId: req.user.id, title } });


    if (duplicate) {
      return res.status(400).json({ message: 'Title already exists.' });
    }

    const task = await Task.create({
      userId: req.user.id,
      title,
      description,
      dueDate,
      status,
    });

    res.status(201).json({ message: 'Task created', data:task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const query = { where: { userId: req.user.id } };
    const tasks = await Task.findAll(query);
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getTasks_by_status_duedate = async (req, res) => {
    try {
      const { status, dueDate } = req.query;
  
      const query = { where: { userId: req.user.id } };
      if (status) query.where.status = status;
      if (dueDate) query.where.dueDate = dueDate;
  
      const tasks = await Task.findAll(query);
      res.status(200).json({ tasks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { status } = req.body;

    const task = await Task.findOne({
      where: {
        id: taskId,
        userId: req.user.id,
      },
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found.' });
    }

    if (status) task.status = status;
 

    await task.save();

    res.status(200).json({ message: 'Task updated successfully.', task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const deleted = await Task.destroy({
      where: {
        id: taskId,
        userId: req.user.id,
      },
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Task not found.' });
    }

    res.status(200).json({ message: 'Task deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ---------------- Optional Features ----------------

exports.getTasks_bystatus = async (req, res) => {
    try {
      const tasks = await Task.findAll({
        where: {
          userId: req.user.id,
          status: req.query.status,
        },
      });
  
      res.status(200).json({ tasks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getTasks_pagination = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
  
      const tasks = await Task.findAll({
        where: { userId: req.user.id },
        offset: (page - 1) * limit,
        limit: limit,
      });
  
      res.status(200).json({ tasks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };