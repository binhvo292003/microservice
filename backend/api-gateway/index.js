const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

// app.use('/', proxy('http://localhost:8001'));
app.use('/cms', proxy('http://localhost:8001'));
app.use('/pos', proxy('http://localhost:8002'));
app.use('/shipping', proxy('http://localhost:8003'));
app.use('/whs', proxy('http://localhost:8004'));

app.listen(8000, () => {
    console.log('Gateway is Listening to Port 8000');
});
