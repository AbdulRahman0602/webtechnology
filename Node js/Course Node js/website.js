
const http = require('http');

const fs = require('fs');

const port = process.env.PORT || 3000;   // the port is used to store the port number on which server is running 

const server = http.createServer((req, res) =>{
    //console.log(req) //used to get all the information present in req
    console.log(req.url) // used to get specefic information
    res.setHeader('Content-Type', 'text/html')
    if(req.url == '/welcome'){
        res.statusCode = 200;
        res.end('<h1> WELCOME </h1> <p> Hello World!! </p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<p> You are in about page </p>');
    }
    else if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode = 404; //404 is used to indicate page not found
        res.end('<p> Page Not Found </p>')
    }
})

server.listen(port, ()=>{
    console.log(`server is listining on port ${port}`);
});