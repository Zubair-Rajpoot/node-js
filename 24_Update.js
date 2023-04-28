const dbConnect = require('./22_MongoDB');

let update = async ()=>{
    let data = await dbConnect();
    let response = await data.updateMany(
        {name:'Football'},{$set:{name:'Cricket'}}
    );
    if(response.acknowledged){
        console.log('record updated');
    }
};
update();

// updateOne() update only 1 record and only first record that meet requirment.
// updateMany() update all records.