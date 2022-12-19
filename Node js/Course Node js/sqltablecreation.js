var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb2",
    port:3307
});

conn.connect(function(err){
    if(err)throw err;
    console.log("Connected..");
    var sql= "CREATE TABLE customer(name VARCHAR(25), address VARCHAR(25))";
    conn.query(sql,function(err,result){
        if(err)throw err;
        console.log("Table Created");
    });
});
