//import {mod} from "./mjsmodule2.mjs"
//import {mod2 as mod} from "./mjsmodule2.mjs" //this method can be used to import another function as another name
//mod()
//import mod1 from "./mjsmodule2.mjs"     //this can be used to call the default function 
//mod1()

// import * as a2 from "./mjsmodule2.mjs"      //* is used to import all the functions
// console.log(a2)

import * as a2 from "./mjsmodule2.mjs"      // this is used to get the returned value
console.log(a2.mod())
