// const logger = require("./logger");
//
// function greet(name) {
//     console.log("Yahallo " + name + "!");
// }
//
// // greet("Bela Jash");
//
// logger.log('Yahallo!');
//
// [1, 2, 3].find(value => value === 3);
//
// const lion = require('lion-lib-bj');
//
// console.log(lion.add(2, 5));

const http = require('http');

const server =
    http.createServer((req, res) => {
        if (req.url === '/') {
            res.write('<h1>Home</h1>');
            res.end();
        }
        if (req.url === '/api/courses') {
            res.write(JSON.stringify([1, 2, 3]));
            res.end();
        }
    });

server.listen(3000);

console.log('Listening on port 3000');