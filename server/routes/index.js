const express = require('express');
const registerUser = require('../controller/registerUser');
const userDetails = require('../controller/userDetails');
const logout = require('../controller/logout');
const updateUserDetails = require('../controller/updateUserDetails');
const loginUser = require('../controller/loginUser');
const searchUser = require('../controller/searchUser');

const router = express.Router();

//register user api
router.post('/register', registerUser)
//register user api
router.post('/login', loginUser)
//login user details
router.get('/user-details', userDetails)
//logout user
router.get('/logout', logout)
//update user details
router.post('/update-user', updateUserDetails)
//search user
router.post("/search-user", searchUser)

module.exports = router;