// Your goal is to write an Event constructor function, which can be used to make event objects.
//
// An event object should work like this:
//
// it has a .subscribe() method, which takes a function and stores it as its handler
// it has an .unsubscribe() method, which takes a function and removes it from its handlers
// it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments
// As this is an elementary example of events, there are some simplifications:
//
// all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
// you should not worry about the order of handlers' execution
// the handlers will not attempt to modify an event object (e.g. add or remove handlers)
// the context of handlers' execution is not important
// each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again

// My Answer

function Event() {
  var funcs = []
  this.subscribe = function(func){
    funcs[funcs.length] = func
  }
  this.unsubscribe = function(func) {
    if (funcs.indexOf(func) !== -1) {
      funcs.splice(funcs.indexOf(func), 1)
      }
  }
  this.emit = function(){
    for(let i = 0; i < funcs.length; i++){
      funcs[i].apply(this, arguments)
      }
  }
}

// Best Answer

function Event() {
  this.handlers = [];
}

Event.prototype.subscribe = function(handler) {
  this.handlers.push(handler);
};

Event.prototype.unsubscribe = function(handler) {
  var index = this.handlers.indexOf(handler);

  if (-1 !== handler) {
    this.handlers.splice(index, 1);
  }
};

Event.prototype.emit = function () {
  var args = arguments;
  this.handlers.forEach(function(handler) {
    handler.apply(null, args);
  });
};

// Or

class Event {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(func) {
    this.subscribers.add(func);
  }

  unsubscribe(func) {
    this.subscribers.delete(func);
  }

  emit(...args) {
    this.subscribers.forEach(s => s(...args));
  }
}
