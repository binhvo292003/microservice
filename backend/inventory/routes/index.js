const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/', (req, res) => {
    res.json('Inventory API');
});

router.get('/items', inventoryController.getItems);
router.post('/items', inventoryController.createItem);

module.exports = router;
