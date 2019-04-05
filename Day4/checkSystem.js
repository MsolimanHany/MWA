const os = require('os');
const {Subject} = require('rxjs');
const subject = new Subject();



const freeMem = os.freemem();

const cpus = os.cpus();
const noCPUs =  cpus.length;
const gbMem =  Math.round(freeMem/ 1024/ 1024 / 1024 * 100) / 100;



//event1
subject.subscribe((data) => {
if(data[0] < 4)
{
    console.log('Memory you have ', data[0]);
    console.log('The app needs at least 4 GB of RAM!');
}

});
//event2
subject.subscribe((data) => {
    if( data[1] < 2)
    {
        console.log('Processors you have ', data[1]);
        console.log('Processor is not supported!');
    }
    
});
//event3
subject.subscribe((data) => {
if(data[0]>=4 &&data[1]>=2)
{
    console.log('System is checked successfully :-)!');
    console.log('\tYou have ', data[0], 'GB of RAM');
    console.log('\tYou have ', data[1], 'CPU cores');
}

});




const data = [gbMem,noCPUs]; // pass the values as array
subject.next(data);
