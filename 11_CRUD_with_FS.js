// make/create file
// read file
// update file
// delete file
// rename file
// interview Question: what is buffer?
// Answer: Buffer is a memory which is used by node js to perform tasks like execution etc.

const fs = require("fs");
const path = require('path');

// create file

let dirPath = path.join(__dirname,"myFiles");
// // console.log(dirPath);
fs.writeFileSync(`${dirPath}/createFile.txt`,"File is created by 11_CRUD_with_FS.js");

// read file

let filePath = path.join(dirPath,"createFile.txt");
// console.log(filePath);
fs.readFile(filePath,'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

// update file

fs.appendFile(filePath,"and now it is updated by this file again",(err)=>{
    if(err) throw err;
    console.log('file has been updated');
})

// delete file

fs.unlinkSync(filePath);

// rename file

fs.rename(filePath,`${dirPath}/renamed1.txt`,(err)=>{
    if(!err){
        console.log("FIle name is updated");
    }
    else throw err;
});
// fs.renamesync() is another option.