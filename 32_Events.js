const EventEmitter = require('events');
const express = require('express');

const app = express();
const event = new EventEmitter();

// event
event.on('EV',()=>{
    console.log('EV is called');
});

app.get('/',(req,resp)=>{
    console.log('get API called');
    event.emit('EV'); // get API k sath event bhi emit ho jaye ga jis ka name EV hai.
});

app.listen(5000,()=>{
    const x=10;
    console.log(x);
});