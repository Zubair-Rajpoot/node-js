// npm i mongoose => install package.
// mongodb official pkg hai lkn uss mn schema or medel bnany k liye bhht sari coding krni parti hai.
// mongoose hmari iss kam mn bht help krta hai.
// mongoose ko use kr k hm schema or model ko easily define kr skty hain.
// iss liye ab se mongoose ko use kiya krein gy.
// mongoose mn schema or model define kr skty hain.
// schema: rules or validations hoti hain.
// model: model ka kaam schema ki base py nodejs ko mongoDB se connect krna hota hai.
// Mongoose CRUD ==> Start.

const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

async function conn(){
    await mongoose.connect('mongodb://127.0.0.1:27017/youtube');
        const videosSchema = mongoose.Schema({
            name: String,
            category: String,
            Player: String,
            Team: String
        });
        return videosModel = mongoose.model('videos', videosSchema);

};

// insert/save data using mongoose.
const saveInDB = async () => {
    // conn() se data return hoga to await work kry ga or data save hota warna nahi.
    const VM = await conn();
    let data = VM(
        { name: "BMW", category: "Car", Player: "All Rounder", Team: "Fast and Furious" }
    );
    let result = await data.save();
    console.log(result);
};
saveInDB();

// update data using mongoose.
const updateInDB = async () => {
    // conn() se data return hoga to await work kry ga or data update hota warna nahi.
    const VM = await conn();
    const data = await VM.updateOne(
        { name: "BMW" }, { $set: { name: "Bugatti" } }
    );
    console.log(data);
};
updateInDB();

// delete data using mongoose.
const deleteInDB = async () => {
    // conn() se data return hoga to await work kry ga or data delete hota warna nahi.
    const VM = await conn();
    const data = await VM.deleteOne(
        {_id: new ObjectId('644bdf5536a0439835b0027c')}
    );
    console.log(data);
};
deleteInDB();

// Read data using mongoose.
const findInDB = async ()=>{
    // conn() se data return hoga to await work kry ga or data find hoga warna nahi.
    const VM = await conn();
    const data = await VM.find();
    console.log(data);
}
findInDB();