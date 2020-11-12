const express = require('express');
const multer = require('multer');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');
const { check } = require('express-validator');


//register client
router.post('/register', [
    check('login', 'Login is required').not().isEmpty(),
    check('mail', 'Email need to be valid!').isEmail(),
    check('password', 'Please enter a password').isLength({ min: 6 })
], ctrlUser.register);

module.exports = router;
