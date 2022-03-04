var express = require ("express")
var cors = require ("cors")
var bodyparser =require ("body-parser")
var mysql = require('mysql2')
const dbs=require("./database/db")
var materiel =require("./model/materiel")
var fichep =require("./model/fichep")
var app = express()
app.use(cors())
app.use ( bodyparser.json())

app.use('/materiel',materiel)
app.use('/projet',fichep)

/*const db = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'basepfe',
    port:3306
});

db.connect(err=>{
    if(err){console.log(err);}
    console.log('database connected ...');
})

app.get('/materiel',(req,res)=>{
    let qr = `select * from materiel `;
    db.query(qr,(err,result)=>{
        if(err)  
        {
            console.log(err,'errs');
        }
        if(result.length>0)
        {
            res.send({
                message:'all materiel data',
                data:result
            });
        }
    });
});

app.post('/materiel' , (req,res)=> {
    console.log(req.body,'createdata');

    let ref = req.body.ref;
    let Nom = req.body.nom;
    let qute = req.body.qte; 

    let qr = `insert into materiel (ref,nom,qte) values('${ref}','${Nom}' ,'${qute}') `;
    console.log(qr,'qr')
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        console.log(result,'result')
        res.send({
            message:'data inserted ' ,
            result: result 
        });

    });
});

app.put('/materiel/:id',(req,res)=>{
    console.log(req.body,'updatedata');
     let gid = req.params.id
    let ref = req.body.ref;
    let Nom = req.body.nom;
    let qute = req.body.qte;

    let qr =` update materiel set ref= '${ref}' , nom ='${Nom}' , qte ='${qute}' where id=${gid}`;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
res.send({
    message:'data update '
})  ; 
 });
})

app.delete('/materiel/:id',(req,res)=>{
    let gid = req.params.id;
    let qr =`delete from materiel where id ='${gid}'`;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}

        res.send({
            message :'data deleted'
        })
    });
}); */

app.listen(3000,()=>{
    console.log('server running');
})