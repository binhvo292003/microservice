const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'CMS' });
});

app.listen(8003, () => {
    console.log('CMS is listening on port 8003');
});
