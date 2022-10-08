const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
   // if (req.url === '/api/users') {
      // const users = [
        //{ name: 'Bob Smith ', age: 40},
       // { name: 'John Doe', age:30}
       //];
       
       // res.writeHead(200, { 'Content-Type': 'application/json'});
        //res.end(JSON.stringify(users));
    
    //});
   // }
    
   // Build file path
   let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

   // Extension of file
   let extname = path.extname(filePath);

   // Initial content type
   let contentType = 'text/html';

   // Check ext and set content type
   switch (extname) {
    
   }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

