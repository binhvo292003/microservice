-- Enum for product attribute type
CREATE TYPE product_attribute_type AS ENUM ('color', 'size');

-- Table: users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    avatar_url VARCHAR,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR,
    phone_number VARCHAR,
    created_at TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Table: shipment
CREATE TABLE shipment (
    id SERIAL PRIMARY KEY,
    shipment_date TIMESTAMP,
    address VARCHAR,
    city VARCHAR,
    country VARCHAR,
    user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Table: categories
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    description VARCHAR,
    created_at TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Table: sub_categories
CREATE TABLE sub_categories (
    id SERIAL PRIMARY KEY,
    parent_id INTEGER REFERENCES categories(id),
    name VARCHAR,
    description VARCHAR,
    created_at TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Table: products
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    description VARCHAR,
    price VARCHAR,
    category_id INTEGER REFERENCES sub_categories(id),
    created_at TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Table: wishlist
CREATE TABLE wishlist (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    created_at TIMESTAMP,
    deleted_at TIMESTAMP
);

-- Table: cart
CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    total INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Table: cart_item
CREATE TABLE cart_item (
    id SERIAL PRIMARY KEY,
    cart_id INTEGER REFERENCES cart(id),
    product_id INTEGER REFERENCES products(id),
    products_sku_id INTEGER,
    quantity INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Table: order_details
CREATE TABLE order_details (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    payment_id INTEGER,
    total INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    shipment_id INTEGER REFERENCES shipment(id)
);

-- Table: order_item
CREATE TABLE order_item (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES order_details(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Table: payment_details
CREATE TABLE payment_details (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES order_details(id),
    amount INTEGER,
    provider VARCHAR,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
