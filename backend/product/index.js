// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8004;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/', require('./routes/productRoutes'))

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});