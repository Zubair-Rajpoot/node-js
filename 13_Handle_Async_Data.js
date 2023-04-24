// agr hmary pas koi logic time le raha hai to uss ko kis tareeqy se handle kiya jaye taa k hmary pas actual result aye.
// iss cheez ko handle krny k liye hn promises use krty hain.
// callback use krna purana tareeqa ho gya hai.
// ab ya to 'promises' use kiye jaty hain ya 'async await'.
// most important cheez hoti hai promises.

let a = 20;
let b = 0;

const waiting = new Promise((response,reject)=>{
    setTimeout(()=>{
        response(30);
    },2000)
});

waiting.then((data)=>{
    b = data;
    console.log(a+b);
});