const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 3002;
http.createServer(app)
    .listen(PORT, error => {
        console.log(`Service started on port: ${PORT}`);
    });
