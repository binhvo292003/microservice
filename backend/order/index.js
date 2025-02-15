const express = require('express');
const app = express();

const PORT = 8002;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Shipping' });
});

app.listen(PORT, () => {
    console.log(`Shipping Service is listening on port ${PORT}`);
});
