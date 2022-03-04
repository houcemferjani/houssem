var mysql = require('mysql2')
const dbs = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'basepfe',
    port:3306
});

dbs.connect(err=>{
    if(err){console.log(err);}
    console.log('database connected ...');
})
module.exports =dbs ;