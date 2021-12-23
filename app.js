const express = require('express');
const app = express();
app.use(express.json());
const ping=require('./routes/pingRoute');
app.use("/api",ping)
module.exports = app;