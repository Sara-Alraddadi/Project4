const express = require('express')
const app = express()
const mongoose = require('mongoose')
 
mongoose.connect('mongodb://localhost/project4' , { useNewUrlParser: true, useUnifiedTopology: true  })
.then(res => console.log("mongo is connect"))
.catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded({extended : false}))//to use json

//user route
app.use("/user", require('./routes/user'));


app.listen(5000 , ()=> console.log("server is running"))
