// www.thapa.com -welcome to my home page
// www.thapa.com/aboutus -welcome to my about us page
// www.thapa.com/contact -welcome to my constact us page
const path=require('path')
const express=require('express');
const app=express();
// console.log(__dirname);
console.log(path.join(__dirname,'../public'));

app.use(express.static(path.join(__dirname,'../public')));


app.listen(3000,()=>console.log('port listening to port 3000'))