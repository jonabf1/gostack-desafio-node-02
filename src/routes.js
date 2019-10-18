const express = require('express');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const StudentController = require('./app/controllers/StudentController');
const authMiddleware = require('./app/middlewares/auth');

const routes = express.Router();

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);
routes.post('/student', authMiddleware, StudentController.store);
routes.put('/student', authMiddleware, StudentController.update);

module.exports = routes;
