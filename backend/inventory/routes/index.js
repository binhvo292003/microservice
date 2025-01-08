const express = require('express');
const router = express.Router();
const inventoryLimiter = require('../middleware/rateLimiter'); // Adjust the path as needed
const inventoryController = require('../controllers/inventoryController');

router.use(inventoryLimiter);

router.get('/', (req, res) => {
    res.json('Inventory API');
});

router.get('/items', inventoryController.getItems);
router.post('/items', inventoryController.createItem);

module.exports = router;
