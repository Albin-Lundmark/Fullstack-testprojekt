const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.get('/api', (_req, res) => {
  res.send({ hello: 'world' })
})

app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`)
})
