const app = require('./app');
const http = require('http');

const PORT = 8005;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Inventory Service is listening on port ${PORT}`);
});
