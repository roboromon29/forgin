'use strict';

var express = require('express');
var userController = require('../controllers/user')

var router = express.Router();

router.get('/test', userController.test);
router.post('/save-user', userController.saveUser);
router.get('/getProvince', userController.getProvince);
router.get('/getCanton/:id', userController.getCanton);
router.get('/getDistric/:canton', userController.getDistrito);

module.exports = router;