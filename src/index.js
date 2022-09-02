const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());


const TaskRoutes = require('./routes/TaskRoutes');
const TaskTypeRoutes = require('./routes/TaskTypeRoutes');
server.use('/task', TaskRoutes);
server.use('/taskType', TaskTypeRoutes);

server.listen(3333, () => {
  console.log('API ONLINE');
});