const express = require('express');
const app = express();

app.use(express.json());
app.set("port", 4000);

module.exports = app;