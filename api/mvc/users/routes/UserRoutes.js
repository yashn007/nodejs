var express = require('express');
var UsersRouter = express.Router();
var UserController = require('../controllers/UserControllers');

/**
 * Users routes
 */
UsersRouter.post('/session',UserController.IsSession);
UsersRouter.post('/create/account',UserController.CreateAccount);
UsersRouter.post('/login',UserController.UserLogin);
UsersRouter.post('/reset/password',UserController.ResetPassword);
module.exports = UsersRouter;
