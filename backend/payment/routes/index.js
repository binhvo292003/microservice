const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.get('/', (req, res) => {
    res.json('Payment API');
});

router.get('/items', paymentController.getItems);
router.post('/items', paymentController.createItem);

module.exports = router;
