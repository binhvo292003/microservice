const app = require('./src/app');

const server = app.listen(8001, () => {
    console.log(`User is listening on port 8001`);
});

process.on('SIGINT', () => {
    server.close(() => console.log(`exits server express`));
});