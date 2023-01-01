const express = require('express')
const router = express.Router()
const PostControllers = require('../controllers/Post/post.controllers')

router.get('/links', PostControllers.buscar)
router.post('/links', PostControllers.postar)

module.exports = router
