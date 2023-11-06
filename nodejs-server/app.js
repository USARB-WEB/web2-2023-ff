const http = require('http');
const hostname = 'localhost';
const port = 3000;


const students = [
    { 
        id: 1, 
        name: 'Alice' 
    },
    { 
        id: 2, 
        name: 'Andrew' 
    },
    { 
        id: 3, 
        name: 'John' 
    },
    { 
        id: 4, 
        name: 'Mihai Eminescu'
    },
]

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log(req.url);
  res.end(students.map((student) => student.name).join('\n'));
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

