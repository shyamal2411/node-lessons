var events = require('events');
// var emitter = new events.EventEmitter();

// emitter.on('someEvent', function(msg){
//     console.log(msg);
// });

// emitter.emit('someEvent', 'the event was emitted');
// element.on('click', function(){});

var util = require('util');
var person = function(name){
    this.name = name;
};

util.inherits(person, events.EventEmitter);

var Shyamal = new person('Shyamal');
var Manav = new person('Manav');
var Nency= new person('Nency');

var people = [Shyamal, Manav, Nency];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg);
    })
})

Shyamal.emit('speak', 'Hey, I am Shyamal');
Manav.emit('speak', 'Hey, I am Manav');