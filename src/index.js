const express = require("express");
const { read } = require("fs");
var app = express();

app.get('/',(req,res)=>{
   res.send('hello from the express jsnode');
});
app.get('/about',(req,res)=>{
    res.send('hello from about')
});

app.listen(3000,'127.0.0.1',()=>console.log('listening the port 8000'))


// API
// get -read
// post -Create
// put- update
// delete-delt

// the callback funciton has 2 parameter ,request(req) adn response(res).
// The request object represents the HTTp request 
// has propertiese for the request querly string aprameters body http headers etx 

// similarly the response object represents the HTTP response 
// that the express app sends when it receives an HTTP request 
