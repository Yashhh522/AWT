const express = require("express");
const bodyParser = require("body-parser")

const hostname = "127.0.0.1";
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/form.html");   //sending html file to the Server
});

app.post("/display",function(req,res){
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var id = req.body.id;
    var age = req.body.age;
    var inst = req.body.institute;
    var dept = req.body.dept;
    var info = "Student's full name : "+firstname+" "+lastname+". Student's age : "+age+". Student's ID : "+id+". Student is pursuing "+dept+" from "+inst;
    res.send("<b>Details : </b>"+info);
});

app.listen(3000, function(){
    console.log(`server is running on http://${hostname}:${port}/`);
  })
