const http = require('http');

// create a server instance
const server = http.createServer(function(req, res){
    // write the header
    res.writeHead(200,{'Content-Type':'application/json'});

    // send information to the front end
    res.end(`
        {
            "name": "Gbolahan",
            "track": "Backend",
            "language": "Javascript",
            "msg": "JS no dey gree hear word"
        }
    `);

});

//create a port
server.listen(9001, '127.0.0.1');

//feedback on the terminal
console.log('Server up and running');