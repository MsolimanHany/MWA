function mumConvert1(domain) {
    const dns = require('dns');
    dns.resolve4(domain, (err, address) => {
        if (err) {
            throw err;
        }else{
            console.log('mumIPaddress: ', address);
        }
  });
  }
  mumConvert1('www.mum.edu');
  
  
  function mumConvert2(domain) {
    const  {promisify} = require('util');
  
    const dns = require('dns');
    const dnsconverter = promisify(dns.resolve4); // convert the callback to promise
    dnsconverter(domain)
        .then (myaddress => console.log('dnsconverter2: ', myaddress))
        .catch(error => console.log(error));
  }
  mumConvert2('www.mum.edu');
  
  function mumConvert3(domain) {
    const  {promisify} = require('util');
  
    const dns = require('dns');
    const dnsconverter = promisify(dns.resolve4); // convert the callback to promise
  
    async function asyncIPrsolve(){
        try{
            const address = await dnsconverter(domain);
            console.log('mumConvert3: ', address)
  
        }catch(error){
            console.log('Error:', error);
        }
    }
    asyncIPrsolve();
   
  }
  mumConvert3('www.mum.edu');
  
  
  