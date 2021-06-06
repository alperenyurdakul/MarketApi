const express = require('express');
const router = express.Router();

const getUser = require('../controllers/user/getUser');
const getUserId = require('../controllers/user/getUserId');
const getCount = require('../controllers/user/getCount');
const deleteUser = require('../controllers/user/deleteUser');
const postLogin = require('../controllers/user/postLogin');
const postRegister = require('../controllers/user/postRegister');
const postUser = require('../controllers/user/postUser');
const putUserId = require('../controllers/user/putUserId');


router.get('/', getUser)

router.get('/:id', getUserId)

router.post('/', postUser)

router.put('/:id',putUserId)

router.post('/login', postLogin)

router.post('/register', postRegister)

router.delete('/:id', deleteUser)

router.get(`/get/count`, getCount)



module.exports =router;