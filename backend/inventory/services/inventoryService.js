module.exports = {
    getItems,
    createItem,
};

async function getItems() {
    // Mock data, replace with actual database call
    return [
        { id: 1, name: 'Item 1', quantity: 10 },
        { id: 2, name: 'Item 2', quantity: 20 },
    ];
}

async function createItem(data) {
    // Mock data, replace with actual database call
    return { id: 3, name: data.name, quantity: data.quantity };
}
