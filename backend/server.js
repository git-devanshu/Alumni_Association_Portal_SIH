const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {connectToDB} = require('./configs/dbconfig');
const {alumniRouter} = require('./routes/alumniRouter');

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

connectToDB();

app.use('/alumni', alumniRouter);

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`==== Server is running on port ${port} ====`);
});