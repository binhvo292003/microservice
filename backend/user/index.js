const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'POS' });
});

app.listen(8001, () => {
    console.log('User is listening on port 8001');
});
