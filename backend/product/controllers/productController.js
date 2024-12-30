const Product = require('../models/productModel');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
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
    res.status(500).json({ error: 'An error occurred while fetching the product.' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: 'An error occurred while creating the product.' });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    product.name = name;
    product.price = price;
    product.description = description;
    await product.save();
    res.json(product);
  } catch (error) {
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