const express = require('express')
const path = require('path')
const sqlite3 = require('sqlite3').verbose()

const app = express()
const port = process.env.PORT || 3000

//Öppna anslutning till db
const db = new sqlite3.Database(path.resolve(__dirname, 'test.sqlite'))

/* app.get('/api', (_req, res) => {
  res.send({ hello: 'world' })
}) */

//Endpoint för att hämta data från databasen
app.get('/accounts', (req, res) => {
  db.all('SELECT * FROM accounts;', (err, rows) => {
    if (err) {
      console.error(err.message)
      res.status(500).send('Database error')
      return
    }
    res.json(rows)
  })
})

//Middleware för att läsa statiska filer med express från mappen dist
app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`)
})
