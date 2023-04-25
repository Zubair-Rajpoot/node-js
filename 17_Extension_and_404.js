// remove extensions form URL using get method.
// make 404 page.
// apply 404 page.

const path = require('path');
const express = require('express');

let app = express(); // executable express js.
publicPath = path.join(__dirname,"public");

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/blog',(req,res)=>{
    res.sendFile(`${publicPath}/blog.html`);
})
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/404.html`);
})

app.listen(5000);