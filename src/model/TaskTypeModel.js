const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskTypeSchema = new Schema({
  type: {type: Number, required: true},
  image: {type: String, required: true},
  created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('TaskType', TaskTypeSchema);