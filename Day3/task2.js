const EventEmitter = require('events');

class Gym extends EventEmitter{

    constructor(){
        super();
    }
    boom(){
        setInterval( ()=>{this.emit('Boom','Athlete is working out!');}, 1000 );
   }
}

//Register to the event
const gym = new Gym();
gym.on('Boom', (eventTitle)=> console.log(eventTitle));

//emit
gym.boom();