const EventEmitter = require ('events')

// Instence
const  myEmitter = new EventEmitter()

// Listener

myEmitter.on('birthday', () => {
    console.log("Happy birthday");
    
})

myEmitter.on('birthday', () => {
    console.log("i will send him a gift");
    
})


myEmitter.emit('birthday')
