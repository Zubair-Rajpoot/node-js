module.exports = (req,res,next)=>{
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