const app = require('./app');
const http = require('http');

const PORT = 8006;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Payment Service is listening on port ${PORT}`);
});
