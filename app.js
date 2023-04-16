// import express
const express =  require("express");

// creating constructor
var app  = express( )

// import bosy-parser
var bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

// accessing port 8080
app.listen(8080)

// creating middleware
app.use(function name(req,res,next) {
    console.log("hited middle ware")
    next();
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// basic get route
app.get("/", function (request, response) {
    response.send("inde-xpage ")
    
})
app.get("/about",(req,res)=>{
 
    res.send("hello about")
})

// basic post route 
app.post("/create",(req,res)=>{
   
    res.send(req.query.age)
})

var profile  = {
    "1" : {name : "naseef", jobRole : "React eveloper"},
    "2" : {name : "Fawas", jobRole : ".Net  eveloper"},
    "3" : {name : "Marar", jobRole : "Ui/Ux eveloper"}

}

app.get("/profile/:id",function(req,res){
    let currentProfile  = profile[req.params.id]
    res.send(currentProfile);
});
    
