 const express = require("express");
 const product = require("./routes/productRoute")

 const app = express();

 //Route
app.use("/api/v1", product) 

 module.exports = app;