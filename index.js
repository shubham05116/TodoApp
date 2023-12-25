
const express = require('express');
const app = express();

//connect to db
const dBconnect = require('./config/database')
dBconnect();

require("dotenv").config();
const PORT = 4000;

//middleware to parse  json request body
app.use(express.json())

// import routes for todo api
const todoRoutes = require("./routes/todos")
app.use('/api/v1', todoRoutes);


app.listen(PORT, () => {
    console.log('stated')
});

//default Route
app.get('/', (req, res) => {
    res.send('hello')
})
