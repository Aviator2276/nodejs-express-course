const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

// When exporting one thing, you don't need to create an object.
module.exports = sayHi;