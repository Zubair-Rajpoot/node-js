// call stack
// node API
// CallBack Queue
// these are 3 parts of Event Queue.
// this is about HOW NODE JS WORK?

// Event Loop ==> call stack -> node API -> CallBack Queue -> call stack and so on.

// after call stack, node API and CallBack Queue is not compulsory in some cases.
// but call stack is compulsory part.

// call stack: all the functions with their sequence of execution are registered in call stack.
// call stack se he node js ko pata chalta hai k knsa function pehly execute krna hai.
// hmara saara code aik global function "main()" k andr consider kiya jata hai.

// jo cheez node ki core ni hain or hm kahin se inherit krty hain wo direct nodeAPI mn register houn gi.

// API mean application programming interface: yani 2 programming k beech jo interface hota hai.
// node mn c++ k function inherit ho skty hai jesy k setTimeOut().
// iss wajha se setTimeOut() hamesha NodeAPI mn register hoga.
// orr issi wajha se ye call stack k baad execute hoga yani time lagy ga q k ye CallBack Queue se ho kr Call Stack mn aye ga.

// nodeAPI se direct call stack mn ni jaa skta task.
// q k ye condition hoti hai k nodeAPI ko stack khali chahiye hota hai iss liye wo callback queue mn wait krti hain call stack k khali hony ka.
// or FIFO ki base py call stack mn jayein gi.

// Example =>

console.log("start");

setTimeout(()=>{
    console.log("2 second");
},2000);

setTimeout(()=>{
    console.log("0 second");
},0);

console.log("Finish");

// output will be:
// start
// Finish
// 0 second
// 2 second

// reason is described above.