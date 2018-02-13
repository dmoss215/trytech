DROP DATABASE IF EXISTS trytech_db;

CREATE DATABASE trytech_db;

USE trytech_db;

CREATE TABLE products (
    product_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    manufacturer VARCHAR(30),
    description TEXT,
    retail_price DECIMAL(10,2),
    image_url VARCHAR(100),
    rating FLOAT(2,1),
    units_available INT NOT NULL DEFAULT  1,
    PRIMARY KEY (product_id)
);

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_firstname VARCHAR(100) NOT NULL,
    user_lastname VARCHAR(100) NOT NULL,
    user_email VARCHAR(60) NOT NULL,
    address_street VARCHAR(100) NOT NULL, 
    address_city VARCHAR (100) NOT NULL,
    address_state VARCHAR (25) NOT NULL,
    address_zip VARCHAR (5) NOT NULL, 
    payment_method ENUM('credit card', 'paypal', 'bitcoin', 'voucher'),
    subscription_type INT NOT NULL,
    date_registered DATETIME NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE subscriptions (
    subscription_id INT NOT NULL AUTO_INCREMENT,
    tier_name VARCHAR(15) NOT NULL DEFAULT "pay as you go",
    monthly_cost DECIMAL(10,2) NOT NULL DEFAULT 00.00,
    num_devices INT NOT NULL DEFAULT 1,
    try_days INT NOT NULL DEFAULT 5,
    PRIMARY KEY (subscription_id)
);

CREATE TABLE items (
    item_id INT NOT NULL AUTO_INCREMENT,
    serial_num VARCHAR (15) DEFAULT "00000000000",
    product_type INT NOT NULL,
    PRIMARY KEY (item_id)
);

CREATE TABLE trying (
    trying_id INT NOT NULL AUTO_INCREMENT,
    trying_customer INT NOT NULL,
    trying_item INT NOT NULL,
    try_date DATETIME NOT NULL, 
    date_sent DATETIME,
    PRIMARY KEY (trying_id)
);

CREATE TABLE  completed (
    completed_id INT NOT NULL AUTO_INCREMENT,
    completed_customer INT NOT NULL,
    completed_item INT NOT NULL,
    completed_dateout DATETIME NOT NULL, 
    completed_dateback DATETIME NOT NULL,
    PRIMARY KEY (completed_id)
)

