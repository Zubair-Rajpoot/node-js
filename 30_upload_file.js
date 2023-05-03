// create folder named "uploads".
// multer used as Middleware.

const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,'uploads');
        },
        filename:function(req,file,cb)
        {
            cb(null,`${file.fieldname}-${Date.now()}.png`);
        }
    })
}).single('user-file'); // form ki field ka name hai user-file

app.post('/',upload,(req,resp)=>{
    resp.send('file uploaded');
});

app.listen(5000);