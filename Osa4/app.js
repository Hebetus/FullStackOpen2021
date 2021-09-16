const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogPostsRouter = require('./controllers/blogposts')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
    .then(result => {
        logger.info('connected to MongoBD')
    })
    .catch((error) => {
        logger.info('error connecting to MongoDB:', error.message)
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogPostsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app