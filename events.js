// Events in Node.js
var fileSystem = require('fs');
var readerStram = fileSystem.createReadStream('./splitQuery.js');
readerStram.on('open', function(){
  console.log('File opened')
});

// Node.js has built-in module for 'Events' which could
// be used to create, listen to own events
var events = require('events');
var eventEmitter = events.EventEmitter(); // properties/ methods of events are instance of event emitter, its ubject created

// Now let's fire an event ;-) 
var eventHandler = function(){ // event handler
  console.log('I handled it');
}
eventEmitter.on('Shots fired', eventHandler); // assigns event handler
eventEmitter.emit('Shots fired'); // We need function to handle it before this, called event handler 




