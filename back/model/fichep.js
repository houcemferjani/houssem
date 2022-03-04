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
    let qr = `select * from projet `;       
    dbs.query(qr,(err,result)=>{
        if(err)  
        {
            console.log(err,'errs');
        }
        if(result.length>0)
        {
            res.send({
                message:'all projet data',
                data:result
            });
        } 
    });
}); 
router.get('/p/:num',(req,res)=>{
    let gref =req.params.num;
    let qr = `select * from projet where num =${gref}`;       
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

    let  NOM= req.body.nomc;
    let Typec = req.body.typec;
    let Datec = req.body.datec; 
    let Typep = req.body.typep;
    let  Codes= req.body.codes;
    let  Zone= req.body.zone;
    let  Datel= req.body.datel;
    let  Datea= req.body.datea;
    let  Typel= req.body.typei;
    let  Prixp= req.body.prixp;
    let  Nbot= req.body.nbot;

    let qr = `insert into projet (nomC,typeC,dateC,typeP,codeS,zone,dateL,dataA,typeI,prixP,nbot) values('${NOM}','${Typec}' ,'${Datec}','${Typep}','${Codes}' ,'${Zone}','${Datel}','${Datea}' ,'${Typel}','${Prixp}','${Nbot}') `;
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

module.exports = router;