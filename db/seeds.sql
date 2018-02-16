USE trytech_db;

INSERT INTO products (product_name, manufacturer, product_description, retail_price, image_url, rating, units_available, createdAt, updatedAt) 
VALUES
("Apple iPhone X, Fully Unlocked 5.8, 64 GB - Silver", 
"Apple", 
"An all new 5.8 inch Super Retina screen with all-screen OLED Multi-Touch display;
12MP wide-angle and telephoto cameras with Dual optical image stabilization;
Wireless Qi charging;
Splash, water, and dust resistant;
Sapphire crystal lens cover;",
1131.96,
"/assets/images/iphone-x.jpg",
8.8,
5,
NOW(),
NOW()
),

("Bose Soundwear Companion Wireless Wearable Speaker - Black",
"Bose",
"This comfortable, wearable speaker has an open design, so you can be surrounded by clear, full sound and still stay connected to the world around you;
Patented Waveguide technology, digital signal processing and upward facing speakers deliver deep, rich sound that surrounds you and only you—creating a truly unique and immersive sound experience;
Three-button remote lets you make calls, play and pause tracks and access your phone's Siri or the Google assistant;
Plays for up to 12 hours off a single charge with a rechargeable lithium-ion battery;
Dust, sweat and weather resistant—with an IPX4 rating—and a crinkle-free cover (included with purchase) that won’t cause static;",
299.00,
"/assets/images/bose-soundwear-companion.jpg",
8.4,
4,
NOW(),
NOW()
);

SELECT * FROM products;

INSERT INTO users (user_firstname, user_lastname, user_email, address_street, address_city, address_state, address_zip, payment_method, agreement_signed, user_subscription, date_registered, createdAt, updatedAt) 
VALUES
("John", "Smith", "jsmith@gmail.com", "4500 Bainbridge Road", "Euclid", "OH", "44236", "credit card", true, 1, "2017-12-02", NOW(), NOW()),			
("Mel", "Brooks", "mel.brooks@gmail.com", "490 Euclid Ave", "Euclid", "OH", "44236", "credit card", true, 1, "2017-12-24", NOW(), NOW()), 				
("Bill", "Pettiti", "pettiti250h@gmail.com", "23500 Pettibone Road", "Bainbridge", "OH", "44100", "paypal", true, 2, "2018-01-05", NOW(), NOW()), 		
("Suzie", "Banshee", "thebanshee@outlook.com", "200 Hollywood Blvd", "Beverley Hills", "CA", "90210", "voucher", true, 1, "2018-02-02", NOW(),NOW());	

SELECT * FROM users;

INSERT INTO subscriptions (tier_name, monthly_cost, num_devices, num_days, createdAt, updatedAt)
VALUES
("pay as you go", 00.00, 1, 5, NOW(),NOW()),
("basic", 9.99, 3, 5, NOW(),NOW()),
("gold", 14.99, 3, 7, NOW(),NOW()),
("protester", 29.99, 10, 7, NOW(),NOW());

SELECT * FROM subscriptions;

INSERT INTO categories (category_name)
VALUES
("phones", NOW(),NOW()),
("headphones", NOW(),NOW()),
("laptops/computers", NOW(), NOW()),
("tablets", NOW(), NOW()),
("gaming systems", NOW(), NOW()),
("smartwatches", NOW(), NOW()),
("fitness trackers", NOW(), NOW()),
("bluetooth speakers", NOW(), NOW());

SELECT * FROM categories;
