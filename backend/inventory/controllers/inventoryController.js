const inventoryService = require('../services/inventoryService');

module.exports = {
    getItems,
    createItem,
};

async function getItems(req, res, next) {
    try {
        const items = await inventoryService.getItems();
        res.status(200).json(items);
    } catch (err) {
        next(err);
    }
}

async function createItem(req, res, next) {
    try {
        const item = await inventoryService.createItem(req.body);
        res.status(201).json(item);
    } catch (err) {
        next(err);
    }
}
