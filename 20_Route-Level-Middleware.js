// application level Mid.. hamesha sary routes pr apply hota hai. kisi specific pr ni kr skty.
// Route-Level Middleware kisi 1 route pe bhi, group of routes pr bhi kr saary routes pr bhi apply kr skty hain.


let express = require("express");
let mid = require('./20_Middleware');
let app = express();
let route = express.Router();


// use middleware. 'app.use(mid)' iss line ki zaroorat ni hoti route level mid.. main. bs route ka 2nd parameter middleware ka name likh dety hain to khud he apply ho jata hai uss specific route pr.
// lkn agr hmary pas bhht sary routes hain or hm un mn se kafi sary routes py middleware apply krna chahty hain to sb routes k 2nd parameter mn middleware ka name likhna recommended tareeqa ni hai.
// tb hm 'app.use(mid)' ki jagha 'route.use(mid)' ye line use krein gy.
// or 'app.get()' ki jagha pr 'express.Router()' ka instance yani 'route' use krein gy bs.

route.use(mid);

app.get('',(req,res)=>{
    res.send("Welcome Home Page");
})

route.get('/about',(req,res)=>{
    res.send("Welcome About Page");
})

// middleware in parameter
// app.get('/about',mid,(req,res)=>{
//     res.send("Welcome About Page");
// })

route.get('/contact',(req,res)=>{
    res.send("Welcome Contact Page");
})

app.get('*',(req,res)=>{
    res.send("Error:404");
})

app.use('/',route); // iss line k bina route.get() work ni kry ga

app.listen(5000);