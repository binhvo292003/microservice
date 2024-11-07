const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Rating Service' });
});

app.listen(8003, () => {
    console.log('Rating Service is listening on port 8003');
});
