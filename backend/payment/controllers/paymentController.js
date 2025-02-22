module.exports = {
    getItems,
    createItem,
};

async function getItems(req, res) {
    res.json([{ id: 1, name: 'Item 1' }]);
}

async function createItem(req, res) {
    res.json({ id: 2, name: req.body.name });
}
