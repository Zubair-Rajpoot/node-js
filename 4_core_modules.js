// Modules 2 types k hoty hain. 1. core modules & 2. external modules. 
// jitny bhi built in modules hoty hain unhein core modules kehty hain.
// ye 2 types k hoty hain 1. Global Modules & 2. Non-Global Modules.
// Global: jin ko import ni krna parta ==> console.log(), __dirname , __filename.
// Non-Global: jin ko use krny se pehly import krna parta hai ==> fs.

//Global:-
console.log("I am a Global Module");
console.log(__filename);
console.log(__dirname);

// Non-Global:-
const fs = require('fs'); //iss line ko sb se top py likhna recommended tareeka hai.
fs.writeFileSync("4_test_fileSystem.txt", "this file is made by fs module used in 4_core_modules.js");

// fs ko import krny se fs ki puri library import ho jaye gi.
//hum koi specific function bhi kr skty hain fs mn se.

const gs = require('fs').writeFileSync;
gs("4_test_filesystem_with_gs.txt", "this file is created by fs module by importing only writeFileSync function. see code in line no. 19.");