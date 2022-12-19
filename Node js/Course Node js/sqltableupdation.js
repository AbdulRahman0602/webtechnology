var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"mydb2",
    password:"",
    port:3307
});

con.connect(function(err){
    if(err)throw err;
    console.log("Connected");
    var sql = "UPDATE customer SET address='france' WHERE address='delhi'";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result+"1 record updated");
    });
});