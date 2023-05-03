// files linked:
    // 28_config.js => for database configuration.
    // 28_products.js => Database Schema and Model. har schema k liye alag se file bna dena recommended tareeka hai.

const express = require('express');
const products = require('./28_col_products');
const videosModel = require('./28_col_products');
require('./28_config');

const app = express();

app.get('/', async (req,resp)=>{
    const data = await videosModel.find({name:'Bugatti'});
    resp.send(data);
});

app.use(express.json());
app.post('/', async (req,resp)=>{
    const data = await videosModel(req.body);
    const result = await data.save();
    resp.send(result);
});

app.put('/:name', async (req,resp)=>{
    const data = await videosModel.updateOne(
        {name:req.params.name},{$set:req.body}
    );
    if(data.modifiedCount > 0){
        resp.send("data Updated");
    };
});

app.delete('/:_id', async (req,resp)=>{
    const data = await videosModel.deleteOne(req.params);
    if(data.deletedCount > 0){
        resp.send("Data Deleted");
    };
});

app.listen(5000);