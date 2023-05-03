// usig get method
// search with single field
// search with miltiple field
// test API
// interview question: get() k elawa post(),put(),delete() use kr skty hain?
// Answer: kr skty hain but not recommended.
// using 28_col_products.js and 28_config.js

const express = require('express');
require('./28_config');
const products = require('./28_col_products');

const app = express();

app.use(express.json());

app.get('/search/:key', async (req, resp) => {
    const data = await products.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "Team": { $regex: req.params.key } }
            ]
        }
    );
    resp.send(data);
});

app.listen(5000,()=>{
    console.log("Server is Online");
});