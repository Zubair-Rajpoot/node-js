const dbConnect = require('./22_MongoDB');

const add = async ()=>{
    let data = await dbConnect();
    let response = await data.insertMany(
        [
            {name:'Football',category:'Sports',Player:'Player7',Team:'Pakistan'},
            {name:'Football',category:'Sports',Player:'Player7',Team:'Pakistan'},
            {name:'Football',category:'Sports',Player:'Player7',Team:'Pakistan'}
        ]
    );
    if(response.acknowledged){
        console.log('Data Inserted');
    }       
};
add();


// {name:'Football',category:'Sports',Player:'Player3',Team:'Pakistan'}