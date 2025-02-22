const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
require('dotenv').config();

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/user', proxy('http://user-service:8001'));
// app.use('/error-handling', proxy('http://localhost:8002'));
// app.use('/cart', proxy('http://localhost:8003'));
// app.use('/product', proxy('http://localhost:8004'));
// app.use('/inventory', proxy('http://localhost:8005'));
// app.use('/payment', proxy('http://localhost:8006'));

app.listen(8000, () => {
    console.log('Gateway is Listening to Port 8000');
});
