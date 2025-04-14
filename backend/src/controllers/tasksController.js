class TasksController {
    constructor(TaskModel) {
        this.TaskModel = TaskModel;
    }

    async createTask(req, res) {
        try {
            const task = new this.TaskModel(req.body);
            await task.save();
            res.status(201).json(task);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getTasks(req, res) {
        try {
            const tasks = await this.TaskModel.find();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getTaskById(req, res) {
        try {
            const task = await this.TaskModel.findById(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateTask(req, res) {
        try {
            const task = await this.TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(task);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteTask(req, res) {
        try {
            // Instead of deleting the task, move it to another collection called "deletedTasks" or similar.
            const task = await this.TaskModel.findByIdAndDelete(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = TasksController;