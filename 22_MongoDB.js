const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient; 1 and 2 both lines are same.

// In vscode use 127.0.0.1 instead of localhost.
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);
const database = 'youtube';

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('videos');
};

module.exports = dbConnect;