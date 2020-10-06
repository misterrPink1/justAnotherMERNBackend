const express = require('express');

const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');

const router = express.Router();

router.get('/', usersControllers.getUsers);

router.post('/signup', 
            [
                check('firstName')
                    .not()
                    .isEmpty(),
                check('firstName')
                    .not()
                    .isEmpty(),
                check('email') // Test@test.com => test@test.com
                    .normalizeEmail()
                    .isEmail(),      
                check('password')
                    .isLength({min: 6}),
            ],
            usersControllers.signup
        );

router.post('/login', usersControllers.login);

module.exports = router;