// make files in a folder
// use path module
// get file names and print them
// interview Question : kya hum jis folder mn node js use kr rhy hain uss se bahir bhi kisi folder se files ko access kr skty hain?
// Answer ==> NO, q k node js jis folder mn run ho rahi hain wo aik web server ban jata hai yani aik enviroment ki tarhan work krta hai.. issko ni pata hota k iss k environment k bahir kya ho raha hai.


const fs = require("fs");
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname,'myFiles'));

let dirPath = path.join(__dirname,'myFiles'); //getting path.

// creating files.
for(i=0;i<5;i++){
    fs.writeFileSync(dirPath+"/Hello"+i+".txt","Hello World "+i)
}

// Read and Display file in the Folder (Method 1)==> this will return an array.
fs.readdir(dirPath,(err,files)=>{
    console.log(files)
});

// Read and Display file in the Folder (Method 2)==> this will print each value.
fs.readdir(dirPath,(err,files)=>{
    files.forEach((items)=>{
        console.log(items)
    })
});