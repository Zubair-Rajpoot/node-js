const mysql = require('mysql');
const express = require('express');

const app = express();

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'check'
});

app.use(express.json());
con.connect((err)=>{
    if (err) throw err;
    else{
        let q = "select * from stu";
        // get data in console
        con.query(q,(err,result)=>{
            console.log(result);
        });

        // get API 
        app.get('/',(req,resp)=>{
            con.query(q,(err,result)=>{
                if (err) throw resp.send(err);
                else resp.send(result);
            });
        });

        // POST API
        app.post('/',(req,resp)=>{
            let q = "insert into stu set ?";
            let data = req.body;
            con.query(q,data,(err,result)=>{
                if (err) throw err;
                else{
                    resp.send(result)
                }
            });
        });

        // PUT API
        app.put('/:id',(req,resp)=>{
            let q = "update stu set email=?, password=?, cv=? where id=?";
            let data = [req.body.email,req.body.password,req.body.cv,req.params.id];
            con.query(q,data,(err,result)=>{
                if(err) throw err;
                else resp.send(result);
            });
        });

        // DELETE API
        app.delete('/:id',(req,resp)=>{
            let q = `DELETE FROM stu WHERE id=${req.params.id}`;
            con.query(q,(err,result)=>{
                if(err) throw err;
                else resp.send(result);
            })
        });

    };
});

app.listen(5000);

