-- ==========================================
-- Description: Creates the shopping database
-- and all required tables.
-- ==========================================

CREATE DATABASE shopping;
USE shopping;

-- ==========================================
-- Create Product Categories Table
-- Stores the different product categories.
-- ==========================================

CREATE TABLE product_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45)
);

-- ==========================================
-- Create Products Table
-- Stores product information and links each
-- product to a category.
-- ==========================================

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45),
    description MEDIUMTEXT,
    product_category_id INT,
    price DOUBLE,
    quantity INT,
    FOREIGN KEY (product_category_id)
        REFERENCES product_categories(id)
);

-- ==========================================
-- Create Orders Table
-- Stores customer orders and links each
-- order to a product.
-- ==========================================

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    name VARCHAR(45),
    email VARCHAR(45),
    order_date DATETIME,
    FOREIGN KEY (product_id)
        REFERENCES products(id)
);