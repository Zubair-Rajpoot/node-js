// make a seperate file for DataBase Connection. (22_MongoDB.js);
// find() use hota hai where ka alternative.

const dbConnect = require('./22_MongoDB');

// method 1. (async/await)
async function main(){
    let data = await dbConnect();
    let st = await data.find({Team:"Saudi Arabia"}).toArray();
    console.log(st);
}
main();

// method 2. (Promises)
dbConnect().then((resp)=>{
    console.log(resp.find().toArray().then((data)=>{
        console.log(data);
    }));
});