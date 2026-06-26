-- ==========================================
-- Description: Executes the required SQL
-- queries for the shopping database.
-- ==========================================

USE shopping;

-- ==========================================
-- Query 1
-- Display all orders from newest to oldest.
-- ==========================================

SELECT *
FROM orders
ORDER BY order_date DESC;

-- ==========================================
-- Query 2
-- Display all products in the Electronics
-- category.
-- ==========================================

SELECT p.title, p.price, pc.title AS category
FROM products p
JOIN product_categories pc
ON p.product_category_id = pc.id
WHERE pc.title = 'Electronics';

-- ==========================================
-- Query 3
-- Display the top three most expensive
-- products.
-- ==========================================

SELECT *
FROM products
ORDER BY price DESC
LIMIT 3;

-- ==========================================
-- Query 4
-- Display the total number of products in
-- each category.
-- ==========================================

SELECT pc.title, COUNT(p.id) AS total_products
FROM product_categories pc
LEFT JOIN products p
ON pc.id = p.product_category_id
GROUP BY pc.id, pc.title;

-- ==========================================
-- Query 5
-- Display the top three most ordered
-- products.
-- ==========================================

SELECT p.title, COUNT(o.id) AS total_orders
FROM products p
JOIN orders o
ON p.id = o.product_id
GROUP BY p.id, p.title
ORDER BY total_orders DESC
LIMIT 3;