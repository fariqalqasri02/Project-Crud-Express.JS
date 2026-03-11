require('dotenv').config()

// const passport = require('./helpers/passport')
const express = require('express')
const mongo = require('./configurations/config')
const app = express()
const port = 5000
const routes = require('./routes')
const errorHandler = require('./middleware/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.use(errorHandler)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})