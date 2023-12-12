const express = require('express')
const router = express.Router()

const todoRoute = require('./todo/todo.routes')

router.use('/api', todoRoute)

module.exports = router
