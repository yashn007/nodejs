var express = require('express');
var EmailRouter = express.Router();
var EmailControllers = require('../controllers/email.controllers');

/**
 * Email routes
 */
EmailRouter.post('/forgot/password',EmailControllers.ForgotPassword);
module.exports = EmailRouter;
