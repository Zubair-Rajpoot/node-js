const dbConnect = require('./22_MongoDB');

const del = async ()=>{
    let data = await dbConnect();
    let response = await data.deleteMany(
        {Player:'Player7'}
    );
    if(response.acknowledged == false || response.deletedCount == 0){
        console.log("Error");
    }
    else{
        console.log("data deleted");
    }
}
del();