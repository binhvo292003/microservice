const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); 
const routes = require('./routes');
const verifyUser = require('./middleware/verifyUser');


const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

app.use("/api", routes);

module.exports = app;