const fs = require('fs');
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

fs.readFile("data.json", 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
});

mongoose.connect('mongodb://localhost/data', { useNewUrlParser: true })

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const mainRoutes = require('./routes/main')

app.use(mainRoutes)

app.listen(5000, () => {
  console.log('Node.js listening on port ' + 2000)
})