// install express module: npm i express.
// express js aik framework hai nodejs ka.
// yani hmein API wagera bnany mn kafi help kr skta hai.
// issi liye core nodejs ki bjaye hum express js ko use kr k waqt bachaty hain.
const express = require('express');

const app = express(); // executable express.

// Routing/Query Params
app.get('',(req,res)=>{
    res.send(`<input type="text" value="${req.query.name}" />
    <button>Click Me</button>
    `);
});

// JSON Response or Rendering
app.get('/about',(req,res)=>{
    res.send({name : "Zubair Shahid",
    Email : "Zubair@gmail.com"
});
});

// Html Response or Rendering
app.get('/blog',(req,res)=>{
    res.send('<h1>This is the Blog Page</h1>');
});

// URL: localhost:5000 
app.listen(5000);



