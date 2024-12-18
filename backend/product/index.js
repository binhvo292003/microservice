const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Whs' });
});

app.listen(8004, () => {
    console.log('Product Service is listening on port 8004');
});
