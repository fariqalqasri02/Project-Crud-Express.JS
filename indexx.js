// inisisalisasi express

const express = require('express')
const app = express()
const port = 5000
const config = require('./configurations/config')
const routes = require('./controllers')

app.use(express.json())
app.use(express.urlencoded())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
