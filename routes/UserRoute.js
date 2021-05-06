const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/register',userController.AddUser);
router.get('/users',userController.users);
router.get('/users/:id',userController.singleUser);


module.exports = router;


// Don't forget to change crtf to LF
