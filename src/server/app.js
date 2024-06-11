const express = require('express')
const app = express()
const port = 5123

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`AstraSim app listening on port ${port}`)
})