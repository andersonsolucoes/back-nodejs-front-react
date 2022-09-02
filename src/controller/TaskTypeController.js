const TaskTypeModel = require('../model/TaskTypeModel');

class TaskTypeController {
  async create(req, res) {
    const taskType = new TaskTypeModel(req.body);
    await taskType
      .save()
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      });
  }

  async all(req, res) {
    await TaskTypeModel.find()
      .sort("type")
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      });
  }
}

module.exports = new TaskTypeController();