const { v4:uuid } = require("uuid");

const HttpError = require('../models/http-error');
const { createPlace } = require("./places-controllers");

let DUMMY_USERS = [
    {
        id: 'u1',
        firstName : 'Rkesh',
        lastName : 'Thapa',
        password : 'tester',
        email : 'rikesh@bitoverflow.org'
    }
]


const getUsers = (req, res, next) => {
    if(!DUMMY_USERS){
        return next(new HttpError('Could not find any places.', 404));
    };

    res.json({DUMMY_USERS});
};

const signup = (req, res, next) => {
    const { firstName, lastName, password, email } = req.body;
    const newUser = {
        id: uuid(),
        firstName,
        lastName,
        password,
        email
    };
    DUMMY_USERS.push(newUser);
    res.status(201).json({user: newUser});
};

const login = (req, res, next) => {};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;