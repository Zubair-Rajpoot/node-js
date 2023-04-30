const express = require('express');
const dbConnect = require('./22_MongoDB');
const mongoDB = require('mongodb');

const app = express();

// basic get API
app.get('/',async (req,resp)=>{
    let data = await dbConnect();
    let response = await data.find({Player:"Player5"}).toArray();
    resp.send(response);
});

// basic Post API
app.use(express.json());  // bodyParser() is old method.
app.post('/', async (req,resp)=>{
    let data = await dbConnect();
    let request = await data.insertOne(req.body);
    resp.send(request);
});

// basic Put API
app.put('/:name', async (req,resp)=>{
    let data = await dbConnect();
    let request = await data.updateOne(
        {name:req.params.name}, // name = '/:name' in put()
        {$set:req.body}
    );
    resp.send(request);
});

// basic Delete API
app.delete('/:id', async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id:id = new mongoDB.ObjectId(req.params.id)});
    if(result.acknowledged == false || result.deletedCount > 0){
        resp.send(`${req.params.id} is deleted.`);
    };
});

app.listen(5000);