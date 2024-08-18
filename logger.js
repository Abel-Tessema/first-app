const url = 'http://localhost:8080';

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message', args => {
    console.log(`Here's the message: ${args}`);
});

function log(message) {
    emitter.emit('message', message);
}

module.exports.log = log;
