const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Detail Service' });
});

app.listen(8001, () => {
    console.log('Detail Service is listening on port 8001');
});
