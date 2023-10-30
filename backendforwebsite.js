const port = 3000;
const express = require('express');
const app = express();
const path = require('path');
const bp = require('body-parser');

app.use(bp.urlencoded({ extended: true }));

app.listen(port, (error) => {
    if (!error) {
        console.log("http://localhost:3000");
    }
    else {
        console.log(error);
    }
})
app.get('/form', (req, res) => { res.sendFile(path.join(__dirname, "form.htm")) })
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, "port.htm")) })
app.post('/', (req, res) => {
    var a = req.body.name;
    var address = req.body.address;
    var dob = req.body.dob;
    var contact=req.body.contact;
    var blog1=req.body.blog1;
    var blog2=req.body.blog2;
    var blog3=req.body.blog3;
    var blog1head=req.body.blog1head;
    var blog2head=req.body.blog2head;
    var blog3head=req.body.blog3head;
    var skill1=req.body.skill1;
    var skill2=req.body.skill2;
    var skill3=req.body.skill3;
    var quote=req.body.quote;

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            span{
                font-family: algerian;
                text-decoration: solid;
                color: blue;
                font-size: large;
            }
            main{
                display: flex;
                flex-direction: column;
            }
            #quote{
                width: 60vw;
                height: 20vh;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: medium;
                background-color: black;
              
                border: 2px solid red;
                margin: 4vw;
                color: white;
                text-align: center;
                text-shadow: 1px 1px white;
            }
            .blogs{
                width: 92vw;
                height: 60vh;
                background-color: black;
               
                margin: 5px;
                margin-left: 4vw;
                border: 1px solid purple;
                text-align: center;
                color: white;
            }
            #intro{
                background-color: black;
                text-align: center;
                color: white;
            }
            h2{
                font-family: algerian;
            }
            body{
               background-color: blueviolet;
            }
        </style>
    </head>
    <body>
        <main>
            <div id="intro">
                <h3>Hey everyone! i am <h2>${a}</h2></h3><h3>i am a</h3>
                <span><b>${skill1}</b></span>, <span><b>${skill2}</b></span>, <span><b>${skill3}</b></span>
    
    
            </div>
            <div id="quote">
                ${quote}
            </div>
            <div class="blogs">
                ${blog1head}
                <p>${blog1}</p></div>
    
            <div class="blogs">${blog2head} <p>${blog2}</p></div>
    
            <div class="blogs">${blog3head} <p>${blog3}</p></div>
    
        </main>
    </body>
    </html>`);

});
