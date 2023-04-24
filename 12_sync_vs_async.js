// sync: 1 task at a time.
// async: multiple task at a time.

// sync
console.log('start execution..');
console.log('logic execution..');
console.log('completed execution..');


// async
console.log('start execution..');
setTimeout(()=>{
    console.log('logic execution..');
},2000)
console.log('completed execution..');

// aync also have a drawback, bcz 2nd step jo k time le raha hai execute hony main, us mn agr koi important task perform ho raha ho jis ki zaroorat 3rd step mn parni ho to aisy hoga k 3rd step pehly he perform ho jaye ga bina 2nd step ka wait kiye.
// example ==> output will be 10. b ki value update ni hogi . q k phly 3rd step chal jaye ga.

let a = 10;
let b = 0;

setTimeout(()=>{
    b=10;
},2000);

console.log(a+b);

// iss problem ko solve kiya jaa skta hai, 'callback function' ko use kr k ya 'promises' ko use kr k.

