const http = require('http')
const fs= require('fs')

// Creating a server using  raw node.js
const server = http.createServer();

// Listener
server.on('request', ( req, res ) => {
    if (req.url === '/readfile' && req.method ==='GET'){
        // Streaming file reading
        const readableStream = fs.createReadStream(process.cwd() + '/readl.txt');

        readableStream.on('data', (buffer) => {
            res.statusCode = 200;
            res.write(buffer)
        })

        readableStream.on('end', () => {
            res.statusCode = 200;
            res.end('hellow from server!') 
        })

        readableStream.on('error', (error) => {
            console.log(error);
            
            res.statusCode = 500;
            res.end('Somthing went wrong') 
        })

    }
    console.log( req.url, req.method )
})

server.listen(5000, () => {
    console.log('server is listening on port: 5000');
    
})