# Node Architecture

A runtime environment executing JS code:
JS code --> JS engine --> machine code

Each browswer has a different runtime environment, which is why your JS will look different on different browsers. 

2009 - Ryan Dahl
JS outside of the browser
Node = Chrome V8 inside C++ 

No document element, but we do have fs and http elements

Node is not a programming language OR a framework. It's an environment.

# How Node Works

Asynchronous (or NonBlocking)
Like a server who serve-s many tables without waiting for the chef to complete the food

// opposite of Synchronous (Blocking) -- needs more servers as it takes more time and  more memory //

Single thread -- handles multiple requests and doesnt have to wait for database to return data --> uses an Event Queue

# Node Basics

function sayHello (name) {
    console.log('Hello ' + name)
}

sayHello('Krissy')

--> go to node and write node title.js

// window is not defined, you can't use it in node.

# Node Module System

all of these objects belong to the global object:

console.log(); // global object
or global.console.log()

setTimeout() // call function after delay
clearTimeout()

setInterval() // repeatively call function after delay

clearInterval() 

// example below

var message = '';
console.log(global.message);
--> this will return undefined

# Node notes continue

every node application has at least one module that is the main module


in logger.js
var url = 'http://mylogger.io/log';

function log(message) {
    // send an HTTP request
    console.log(message);
}

module.exports.log = log; 
module.exports.endPoint = url;
// use module.exports if you want to use in another js file

dvd player has buttons on the outside that we can interact with (public interface)

VS

inside of the dvd, objects we don't need to know anything about (implementation detail)

# Learning about Modules

in aps.js file
var logger = require('./logger') 
// assumes js file

logger.log('message');

best practice is to store requirements in const

const logger = require('./logger');

// js hint --> will help solve js errors
// use f2 to rename all items the same

# Module Wrapper Function

at run time, our code is wrapped in this:
function(exports, require, module, __filename, __dirname)

node does not execute our code directly - it wraps it. 

-- filename is complete path 
-- dirname is the path to directory that holds that module

# Node Documentation

useful modules:

File System
HTTP
OS - operating system
Path - Utility fucntion with paths
Progress 
Query Strings - HTTP services
Stream - work with streams of data

Path Module --

const path = require('path');

var pathObj = path.parse(__filename);
// result -> root, dir, base, ext, name

# Current Documentation

OS Module --

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`)console.log(`Free Memory: ${freeMemory}`)
// template string

Before node, you could not get this kind of information from JS outside of the browser. 

File System Module --

const fs = require('fs');

SYNC:
const files = fs.readdirSync('./');
console.log(files);

or 

ASYNC:
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});


# Events

A signal that something has happened in our application. 

HTTP - used to build a web server
Event: New Request

Events Module --

EventEmitter - core building block

const EventEmitter = require('events);
// caps in EventEmitter shows that it's class, not a function //

const emitter = new EventEmitter();

emitter.on('messageLogged', function() {
    console.log('Listener called');
});
// register a listener

emitter.emit('messageLogged');
// signaling that event has happened

Class vs Object:

Class - Human (Behavior)
Object - John (Actual instance of Class)

# Event Arguments

const EventEmitter = require('events);

const emitter = new EventEmitter();

emitter.on('messageLogged', (e) => {
    console.log('Listener called', e);
});

emitter.emit('messageLogged', {id: 1, url: 'http://'});

#Event Emitter

in logger.js ---

const EventEmitter = require('events);

var url = 'http://logger.io/log';

class Logger extends EventEmitter {
    log(message) {
    console.log(message);

    this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;

-----------------
in app.js ---

const EventEmitter = require('events);

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (e) => {
    console.log('Listener called', e);
});

logger.log('message');

-- if you want to raise events, must create a class that extends EventEmitter. 
-- inside that class, when you want to raise event, use this.emit 
-- instead of using EventEmitter, you want to use custom class that extends it 

# HTTP Module

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world!');
        res.end(); // response end
    }
    if (req.url === '/api/courses') {
        req.write(JSON.stringify([1,2,3])
        res.end(); 
    }
});

server.listen(3000);

console.log('Listening on port 3000...');

--> use express to keep it clean

// Examples of Functions

setTimeout(function() {
    console.log('3 seconds have passed');
}, 3000);

---

var time = 0;

var timer = setInterval(function() {
    time += 2;
    console.log( time + ' seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);

// Functional Expressions

function callFunction(fun) {
    fun();
}

var sayBye = function() {
    console.log('bye);
};

callFunction(sayBye);

// Modules - Different Modules for different code -- create new files for new modules




