var mysql= require('mysql');
con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb2",
    port:3307
});

con.connect(function(err){
    if(err)throw err;
    console.log("Connection Established");
    var sql="DELETE FROM customer WHERE address = 'delhi'";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("1 value deleted");
    })
})