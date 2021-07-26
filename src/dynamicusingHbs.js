const express = require("express");
const app = express();
const path = require("path");
const hbs=require('hbs');
var requests = require('requests')


const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");
const partialsPath=path.join(__dirname,"../templates/partials")
// to set the view engine 
app.set("view engine", "hbs");
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

// app.use(express.static(staticPath));

// template engine root
app.get("/", (req, res) => {
  
  res.render("index",{
      myname:"ashish"
  });
});

app.get("/", (req, res) => {
  res.send("we are on excpress server page");
});
app.get("/about", (req, res) => {
  
   
  requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=798f0e4dba528cd5445ae5fd20524a36`)
  .on('data', function (chunk) {
    const objData = JSON.parse(chunk);
    const arrData = [objData];
   
    var citytemperature;
    arrData.map(val=>{
       citytemperature=val.main.temp;
     
    });
    res.render('404erro',{
      city: req.query.city,
      temp:citytemperature
    })
   

  })
  .on('end',()=>console.log('data fetch seccessfully'))
  .on('error',(err)=>console.log(err));
    

    
  

  
});

app.get('*',(req,res)=>{
    res.render('404erro')
})

app.listen(3000, () => console.log("listening to port 3000"));
