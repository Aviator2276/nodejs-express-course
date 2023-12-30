const EventEmitter = require('events');


const customEmitter = new EventEmitter();

// On this channel "response", do this
customEmitter.on('response', (name, id) => {
    console.log(`data recieved: ${name} with ID ${id}`);
});

customEmitter.on('response', () => {
    console.log(`A differnt response`);
});

// Emit on the same channel
customEmitter.emit('response', 'alice', 24);
// Order matters, responses won't respond if defined after the emit.

