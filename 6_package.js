// this file is all about package.json file.
// to create package.json file, run the command: "npm init".
// to install an enternal package run command: "npm i colors" ==> for colorful console.
// package.json file contain all info about our project code.
// it contain the record of all packages used in our project with their version.
// It is very usefull, when we share our project with another developer.
// New Developer just have to run a command: "npm install", and he get all packages required in this project till now.
// "Node Js is Single Threaded" ==> 1 task at a time.
// I'm going to make a package.json file by using terminal.
// We should make .gitignore file.
// .gitignore file used to ignore files and folders by git which we don't want to push on our git repositories.
// example: we dont want to push out node_module folder to be pushed on git bcz it's too big.
// always create .gitignore file in the root folder.


const colors = require("colors");
console.log("hello Colors".green);