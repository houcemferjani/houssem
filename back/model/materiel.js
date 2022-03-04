const express = require("express")
var cors = require ("cors")
var bodyparser =require ("body-parser")
var dbs =require("../database/db")
const router  = express.Router()
var mysql = require('mysql2')
var app = express()
app.use(cors())
app.use ( bodyparser.json())


router.get('/',(req,res)=>{
    let qr = `select * from materiel `;       
    dbs.query(qr,(err,result)=>{
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
router.get('/one/:id',(req,res)=>{
    let gref =req.params.id;
    let qr = `select * from materiel where id =${gref}`;       
    dbs.query(qr,(err,result)=>{
        if(err)  
        {
            console.log(err,'errs');
        } 
        if(result.length>0)
        {
            res.send({
                message:'get single data',
                data:result
            });
        }
    });
});                     
router.get('/nom',(req,res)=>{
    let gref =req.body.searchnom; 
    let qr = `select * from materiel where nom ='${gref}'`;       
    dbs.query(qr,(err,result)=>{
        if(err)  
        {
            console.log(err,'errs');
        } 
        if(result.length>0)
        {
            res.send({
                message:'get single data',
                data:result
            });
        }
    });
});


router.post('/' , (req,res)=> {
    console.log(req.body,'createdata');

    let ref = req.body.ref;
    let Nom = req.body.nom;
    let qute = req.body.qte; 

    let qr = `insert into materiel (ref,nom,qte) values('${ref}','${Nom}' ,'${qute}') `;
    console.log(qr,'qr')
    dbs.query(qr,(err,result)=>{
        if(err){console.log(err);}
        console.log(result,'result')
        res.send({
            message:'data inserted ' ,
            result: result 
        });

    });  
});

router.put('/:id',(req,res)=>{
    console.log(req.body,'updatedata');
     let gid = req.params.id
    let ref = req.body.ref;
    let Nom = req.body.nom;
    let qute = req.body.qte;

    let qr =` update materiel set ref= '${ref}' , nom ='${Nom}' , qte ='${qute}' where id=${gid}`;
    dbs.query(qr,(err,result)=>{
        if(err){console.log(err);}
res.send({
    message:'data update '
})  ; 
 });
})

router.delete('/:id',(req,res)=>{
    let gid = req.params.id;
    let qr =`delete from materiel where id ='${gid}'`;
    dbs.query(qr,(err,result)=>{
        if(err){console.log(err);}

        res.send({
            message :'data deleted'
        })
    });
});
module.exports = router;