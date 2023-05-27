// const  registerController=require("../controller/user.controller")
// const userRouter = require("express").Router();
// const { body } = require("express-validator");
// userRouter.post('/register',registerController);



//   module.exports = {
//     userRouter
//   };


const express = require('express');
const router = express.Router();
const registerController = require('../controller/user.controller');

// Register route
router.post('/register', registerController.register);

module.exports = router;
