const express = require('express')
const UserController = require('../controllers/user')

const router = express.Router()

router.get('/', UserController.getAllUsers)

router.post('/', UserController.addUser)

router.get('/:id', UserController.getUserByID)

router.put('/:id', UserController.updateUser)

router.delete('/:id', UserController.deleteUser)

module.exports = router
