// local
const secret = "A super secret secret, do not share";
// shared
const alice = 'alice';
const bob = 'bob';

// This will console log the module of this file
//console.log(module);
// Using exports, we can export what we ONLY want to export to the rest of the application

module.exports = { alice, bob };