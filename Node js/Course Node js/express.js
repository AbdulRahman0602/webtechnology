const express = require('express')
const app = express()
const port = 3000

//app is used to get the http request like post,get etc
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('This is about Page!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})