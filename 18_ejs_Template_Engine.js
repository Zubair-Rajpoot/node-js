// Template Engine: Dynamic Pages bnany k liye use hoty hain.
// ejs: ejs bhi aik template engine hai.
// Dynamic Page: Jis page py data, Database se aa rha hota hai usy dynamic bolty hain.
// Static Page: Jis page ka Database se koi laina dena ni hota.
// ejs is most popular template engine.

// sb se pehly node js ko btana hoga k hm ejs ko use kr rhy hain.
// iss k liye default line use hoti hai aik => app.set("view engine","ejs");
// app iss mn express() hai, executable wala.

// jb bhi koi template engine use krty hain to 'views' name ka folder bna kr files rakhty hain.
// ye default configuration hoti hai.
// ussi k andr hmara dynamic page bnayein gy with .ejs extension.

// how to make loop in ejs.
// make header file.
// common header file on all files.

const express = require('express');

let app = express();
app.set("view engine","ejs"); // nodejs ko ejs ka bta diya.


app.get('/profile',(req,res)=>{
    let user = {
        name:"Zubair Shahid",
        email:"zubair@test.com",
        city:"Burewala",
        skills:['java','js','c++','Python']
    };
    res.render('profile',{user});
});
app.get('/login',(req,res)=>{
    res.render('login');
});


app.listen(5000);
