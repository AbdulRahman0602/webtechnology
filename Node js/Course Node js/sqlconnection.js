var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3307

});

con.connect(function(err){
    if(err)throw err;
    console.log("connected..");
    con.query("CREATE DATABASE mydb2",function(err,result){
        if(err)throw err;
        console.log("Database Created");
    });
});

