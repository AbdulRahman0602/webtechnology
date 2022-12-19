var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb2",
    port:3307
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql= "INSERT INTO customer (name,address) VALUES ('ben','mumbai')";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("1 value inserted");
    });
});