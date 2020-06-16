const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config();

let { PORT } = process.env;

const { dbConnection } = require('./config')
const { user } = require('./routes')

// For mongoDB connection
dbConnection()

app.get('/', (req, res) => {
    res.json({ title: 'Welcome to App!!' });
});

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

user(app);

var port = PORT || 8080;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))