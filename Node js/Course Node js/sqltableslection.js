var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"mydb2",
    port:3307
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected...");
    con.query("SELECT * FROM customer", function(err,result){
        if(err) throw err;
        console.log(result);
    });
});