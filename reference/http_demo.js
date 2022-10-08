const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
})
.listener(5000, () => console.log('Server running...'));