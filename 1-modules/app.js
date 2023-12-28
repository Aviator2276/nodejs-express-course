// Modules Lesson

/*
CommonJS - Every file is a module (by default) <- Used by NodeJS
Modules - Encapsulated Code (Only share minimum)
*/

/*
Basic Program

const alice = 'alice';
const bob = 'bob';

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi(alice);
sayHi(bob);
*/

// Using requires, we can import modules into this file.
// Use './' to use the file, third party libraries or modules will just use the name
const names = require('./name');
const sayHi = require('./utils');
const data = require('./alternative');

// This will console log the object of names, with it's variables and values of those variables.
//console.log(names);

console.log(data);
sayHi(names.alice);
sayHi(names.bob);

// When calling a module, it is always invoked. This means code within the module that is not
// in a block, will be executed. Even if the variable is not ran.
require('./mind-bomb')