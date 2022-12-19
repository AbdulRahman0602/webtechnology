const EventEmitter = require('events'); // events are used to execute a set of statements when a event occured

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFall', () => {
  console.log('Please turn off the motor!');
  setTimeout(() =>{
    console.log('Please turn off the motor Gentle remainder!!'); 
  }, 3000); //3000 is used to execute these statement after 3sec.
});

console.log("script is running")
myEmitter.emit('WaterFall');
console.log("script is still running")//this statement will execute before 'Please turn off the motor Gentle remainder!!' 
                                        //because it requires 3sec before it can execute it wont wait and execute the next statement.
