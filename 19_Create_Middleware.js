// middleware use hota hai request/response ko modify/filter krny k liye. Authentication wagera mn.
// TYPES => app-level, router level, error-handling, Built-In, Third Party.  
let express = require("express");

let app = express();

// creating Application Level middleware
let mid = (req,res,next)=>{
    if(!req.query.age){
        res.send('age is required')
    }
    else if(req.query.age < 18){
        res.send("you are not eligible to access this page.")
    }
    else{
        // next() ka mtlb hai k middleware se bahir nikal jao or aagy wali line execute kro.
        next();
    }
}
// use middleware.
app.use(mid)

app.get('',(req,res)=>{
    res.send("Welcome Home Page");
})

app.get('/about',(req,res)=>{
    res.send("Welcome About Page");
})


app.listen(5000);



