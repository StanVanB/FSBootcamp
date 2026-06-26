-- ==========================================
-- Description: Inserts sample data into the
-- shopping database tables.
-- ==========================================

USE shopping;

-- ==========================================
-- Insert Product Categories
-- Adds sample product categories.
-- ==========================================

INSERT INTO product_categories (title)
VALUES
('Electronics'),
('Clothing'),
('Books');

-- ==========================================
-- Insert Products
-- Adds sample products and assigns each
-- product to a category using the
-- product_category_id foreign key.
-- ==========================================

INSERT INTO products
(title, description, product_category_id, price, quantity)
VALUES
('Laptop', '15-inch laptop', 1, 899.99, 10),
('Smartphone', 'Android phone', 1, 699.99, 20),
('T-Shirt', 'Cotton T-Shirt', 2, 19.99, 50),
('Jeans', 'Blue denim jeans', 2, 49.99, 30),
('SQL Book', 'Learn SQL', 3, 39.99, 15);

-- ==========================================
-- Insert Orders
-- Adds sample customer orders and links each
-- order to a product using the product_id
-- foreign key.
-- ==========================================

INSERT INTO orders
(product_id, name, email, order_date)
VALUES
(1, 'Andrew Hoggard', 'andrew@test.com', NOW()),
(2, 'John Smith', 'john@test.com', NOW()),
(1, 'Sarah Jones', 'sarah@test.com', NOW()),
(5, 'Mike Brown', 'mike@test.com', NOW()),
(3, 'Emily Davis', 'emily@test.com', NOW());