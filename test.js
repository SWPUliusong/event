const Event = require("./event")

var e = new Event()

console.log(typeof module)
console.log(typeof module.exports)
var listener1 = function(data) {
  console.log(data)
}

var listener2 = function(data) {
  console.log(data + 123)
}

e.on('a', listener1)
e.on('a', listener2)

e.emit('a', 123)
e.off('a', listener1)
e.emit('a', 123)

e.once('bbb', function(data) {
  console.log(data)
})
e.once('ccc', function(data) {
  console.log(data)
})

e.emit('bbb', 789)
e.emit('bbb', 789)
e.emit('bbb', 789)
e.emit('ccc', 741)
e.emit('ccc', 741)
e.emit('ccc', 741)