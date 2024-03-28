const express = require('express');
const router = express.Router();
const userController = require('../controllers/signupcontroller');
const usert=require("../controllers/logincontroller");
const userd=require("../controllers/datacontroller");
// const datauser=require()

// Route to handle user registration
router.post('/register', userController.signupUser);
router.post('/login',usert.loginUser);
router.post('/store',userd.userdata); 
router.get('/datalogin/:id', userController.loginuserdata);


// Other routes for user authentication, CRUD operations, etc.

module.exports = router;
