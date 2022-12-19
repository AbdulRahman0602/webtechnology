const fil = require("fs");

//Reading a file
// fil.readFile('file.txt', 'utf8', (err, data)=>{              //here it will read the further instructions till the file is being read
//     console.log(err,data);
// })

// const a = fil.readFileSync('file.txt');//here sync locks so until the complete file is not read it will not procude further
// console.log(a.toString());//to string is used to convert the file into the string format
// console.log("Finished reading the file");

//Writing into the file

// fil.writeFile('file.txt', "this is being inserted", ()=>{
//     console.log("written into the file");
// } )

b = fil.writeFileSync('file.txt', "this is being written");
console.log(b);