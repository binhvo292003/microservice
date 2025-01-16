const Product = require('../models/productModel');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error); // Log the error
        res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product by ID:', error); // Log the error
        res.status(500).json({ error: 'An error occurred while fetching the product.' });
    }
};

// Create a new product
const createProduct = async (req, res) => {
    try {
        const { name, price, description, rating, imageURL } = req.body;
        const newProduct = await Product.create({ name, price, description, rating, imageURL });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error); // Log the error
        res.status(400).json({ error: 'An error occurred while creating the product.' });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { name, price, description, rating, imageURL } = req.body;
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }
        product.name = name;
        product.price = price;
        product.description = description;
        product.rating = rating;
        product.imageURL = imageURL;
        await product.save();
        res.json(product);
    } catch (error) {
        console.error('Error updating product:', error); // Log the error
        res.status(400).json({ error: 'An error occurred while updating the product.' });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }
        await product.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting product:', error); // Log the error
        res.status(500).json({ error: 'An error occurred while deleting the product.' });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
