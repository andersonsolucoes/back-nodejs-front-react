const express = require('express');
const router = express.Router();

const TaskTypeController = require('../controller/TaskTypeController');


router.post('/', TaskTypeController.create);
router.get('/all', TaskTypeController.all);

module.exports = router;