import path from "path";
 
 const express = require('express');
 const mongoose = require('mongoose');
 const router = require("./routes/book-routes")
 const cors = require("cors");
 const app = express();



 //middleware

 app.use(express.json());
 app.use(cors());
 app.use("/books",router) //localhost:5000/books
 

 app.use(express.static(path.join(__dirname, "../bookstore/build")));
app.get("*", function (req, res){
res.sendFile(path.join(__dirname, "../bookstore/build/index.html"));
});



mongoose
     .connect("mongodb+srv://admin:v4pDEOT05BTd8st7@cluster0.mm5f6go.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>console.log ("Connected To Database") )
    .then(() =>{
       app.listen(5000)
    })
    .catch((err) => console.log(err));

//pwd   v4pDEOT05BTd8st7

