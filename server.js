const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const peers = require('./routes/peers')
const connectDB = require('./db')

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares -
//body-parser
app.use(express.json());
//cors
app.use(cors());

//mongoDB
connectDB();

//routing
app.use('/peers', peers);

app.listen(PORT, () => 
    console.log(`Server up n running @ ${PORT}`)
);
