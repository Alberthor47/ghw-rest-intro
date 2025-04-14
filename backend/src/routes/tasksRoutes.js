const express = require('express');
const TasksController = require('../controllers/tasksController');
const TasksModel = require('../models/TaskModel');

const router = express.Router();
const tasksController = new TasksController(TasksModel);

function setRoutes() {
    router.post('/', tasksController.createTask.bind(tasksController));
    router.get('/', tasksController.getTasks.bind(tasksController));
    router.get('/:id', tasksController.getTaskById.bind(tasksController));
    router.put('/:id', tasksController.updateTask.bind(tasksController));
    router.delete('/:id', tasksController.deleteTask.bind(tasksController));

    return router;
}

module.exports = setRoutes;