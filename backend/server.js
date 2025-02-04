const express = require('express');
const connect_DB = require('./config/db_config');
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))


// Port
const PORT = process.env.PORT || 5000

// DB Connection
connect_DB()

app.get("/" , (req,res) =>{
    res.json({
        message : "Welcome To PropertyPulse API 1.0"
    })
})

// PropertyPulse Routes
app.use("/api" , require("./routes/propertypulse/ppRoutes"))

app.listen(PORT , () =>{
    console.log("Server is Running at :" , PORT);
})