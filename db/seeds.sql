USE trytech_db;

INSERT INTO categories (category_name, createdAt, updatedAt)
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

INSERT INTO products (product_name, manufacturer, product_description, retail_price, image_url, category_id, rating, units_available, createdAt, updatedAt) 
VALUES
("Apple iPhone X, Fully Unlocked 5.8, 64 GB - Silver", 
"Apple", 
"An all new 5.8 inch Super Retina screen with all-screen OLED Multi-Touch display; 
12MP wide-angle and telephoto cameras with Dual optical image stabilization; 
Wireless Qi charging; 
Splash, water, and dust resistant; 
Sapphire crystal lens cover;",
1131.96,
"/assets/images/iphone-x.jpeg",
1,	
8.8,
5,
NOW(),
NOW()
),

("Galaxy Note8, 64 GB - Orchid Gray", 
"Samsung", 
"Easily navigate apps and multitask on a gorgeous 6.3-inch infinity display; 
Take professional-quality photos and zoom in without losing focus, brave spills and splashes, record spectacular 4K video and much more; 
The Galaxy Note8 comes in 64GB and is available in Midnight Black or Orchid Gray;",
960.00,
"/assets/images/galaxy-note8.png",
1,
8.9,
5,
NOW(),
NOW()
),

("Google Pixel2 XL, 64 GB - Just Black", 
"Google", 
"Pixel 2 XL features a smart camera that takes beautiful photos in any light; 
Pixel's long lasting and fast charging battery delivers up to 7 hours of use on 15 minutes of charge; 
Need help or answers? Just ask the Google Assistant; 
Pixel 2 XL also features a striking encased glass metal unibody that's water resistant;",
849.00,
"/assets/images/google-pixel2.jpg",
1,
9.0,
5,
NOW(),
NOW()
),

("Galaxy S8, 64 GB - Midnight Black", 
"Samsung", 
'This Samsung Galaxy S8 comes with a Super AMOLED 5.8-inch screen and 64GB of storage; 
Capture UHD images automatically with the 12MP dual camera; 
Now with Bixby, an intelligent interface that learns from you to help you do more; 
Provides fast Web connection for downloading apps, streaming content and staying connected;',
750.00,
"/assets/images/galaxy-s8.jpg",
1,
9.4,
5,
NOW(),
NOW()
),

("Motorola - Moto X4 32GB (Unlocked) - Super Black", 
"Motorola", 
'5.2" LTPS IPS touch screen offers 16:9 cinema-like screen ratio;  
Expand storage up to 2TB by adding a microSD card (sold separately);  
Includes a front-facing 16.0MP camera for self-portraits and video; 
The phone is protected from dust and can also withstand being submerged in 5 feet of static water for up to 30 minutes;',
399.99,
"/assets/images/motorola-x4.jpg",
1,
9.0,
5,
NOW(),
NOW()
),

("Apple - iPhone 8 64GB - Gold", 
"Apple", 
"Powered by A11 Bionic, a most powerful smartphone chip; 
The 12MP camera comes with a new sensor and advanced image signal processor; 
Resists water and dust and boasts a 4.7-inch Retina HD display with True Tone; 
12MP camera with OIS and 4K video up to 60 fps and a 7MP FaceTime HD camera with Retina Flash for stunning selfies;",
699.00,
"/assets/images/iphone-8.jpg",
1,
9.4,
5,
NOW(),
NOW()
),

("MW 60 Pelle Tessuta Aluminum Wireless Headphones and Stand", 
"Ermenegildo Zegna", 
'Ermenegildo Zegna, in collaboration with Master & Dynamic, over-ear Bluetooth wireless headphones and stand help you to tune into your work while tuning out ambient noise; 
Forged aluminum body with pelle tessuta leather, stainless steel components, and neodymium drivers; 
Bluetooth 4.1 with Aptx high-quality audio; 
Dimensions: Approx. 7.8" x 7.3" x 2" (200x185x50mm);',
650.00,
"/assets/images/ez-mw-60.jpg",
2,
9.2,
3,
NOW(),
NOW()
),

("Bose Soundwear Companion Wireless Wearable Speaker - Black",
"Bose",
"Patented Waveguide technology, digital signal processing and upward facing speakers deliver deep, rich sound that surrounds you and only you—creating a truly unique and immersive sound experience; 
Three-button remote lets you make calls, play and pause tracks and access your phone's Siri or the Google assistant; 
Plays for up to 12 hours off a single charge with a rechargeable lithium-ion battery; 
Dust, sweat and weather resistant with an IPX4 rating and a crinkle-free cover (included with purchase) that won’t cause static;",
299.00,
"/assets/images/bose-soundwear-companion.jpg",
2,
8.4,
4,
NOW(),
NOW()
),

("Sennheiser RS 165 RF Wireless Headphone System", 
"Sennheiser", 
'High-quality Sennheiser transducers and a selectable Bass Boost mode for exceptional sound; 
Signal-to-noise ratio: typ. 85 dBA at 1 Vrms; Frequency response: 18 - 21,000 Hz; 
Maximum sound pressure level 106 dB at 1kHz, 3% THD; 
Provides up to 18 hours of operating time when fully charged for long listening sessions;',
219.95,
"/assets/images/sennheiser-rs165.jpg",
2,
9.4,
3,
NOW(),
NOW()
),

("Apple - MacBook Pro", 
"Apple", 
'A radiant 15-inch Retina display. Powerful quad-core Intel processor. Ultrafast SSD storage. High-performance integrated graphics; 
Great built-in apps. And a Force Touch trackpad and up to 9 hours of battery life; 
15.4" Display - Intel Core i7 - 16 GB Memory - 1TB Solid State Drive (Latest Model) - Space Gray; 
Ultrafast SSD storage. High-performance integrated graphics;',
3199.99,
"/assets/images/macbook-pro.jpg",
3,
9.6,
4,
NOW(),
NOW()
),

("Microsoft Surface Pro", 
"Microsoft", 
"Surface Pro (newest version) Intel Core i7 / 512GB SSD / 16GB RAM; 
Get more done with all day battery life² –– 50% more battery life than Surface Pro 4; 
Newly redesigned front-facing speakers and quieter fanless cooling system; 
Get to work faster with the fastest startup and resume of any Surface Pro yet;",
2199.00,
"/assets/images/surface-pro.jpg",
3,
7.4,
5,
NOW(),
NOW()
),

("HP - Spectre x360 2-in-1", 
"Hewlett Packard",
'Consolidate your workstation with this HP Spectre laptop; 
15.6" 4K Ultra HD Touch-Screen Laptop with Intel Core i7; 
16GB Memory - 512GB Solid State Drive - Dark Ash Silver; 
The 512GB solid-state drive on this HP Spectre laptop has no moving parts for fast file access;',
1449.99,
"/assets/images/hp-spectre.jpg",
3,
9.0,
5,
NOW(),
NOW()
),

("Lenovo Yoga 920 Convertible 2-in-1 Laptop", 
"Lenovo", 
'13.9" Full HD multitouch screen for hands-on control; 
8th Gen Intel Core i7-8550U mobile processor with quad-core processing; 
8GB system memory for advanced multitasking and 256GB of hard drive space; 
Offers four versatile modes — laptop, tablet, tent and stand;',
1299.99,
"/assets/images/lenovo-yoga.jpg",
3,
9.2,
5,
NOW(),
NOW()
),

("MSI Gaming Laptop - Grabski Edition", 
"MSI", 
'Stay competitive in the gaming world with this MSI gaming laptop; 
128GB solid-state drive and 1TB hard drive to store game files; 
The Intel Core i7 processor and 16GB of RAM minimize lag on the 17.3" screen; 
Comes bundled with the complete Star Wars The Old Republic MMO;',
1799.99,
"/assets/images/msi-omen.jpg",
3,
9.2,
5,
NOW(),
NOW()
),

('Razer - Blade 4K Laptop', 
"Razer", 
'Enjoy portability in 4K and VR gaming with this 14-inch gaming laptop; 
Intel Core i7 processor and 16GB of RAM give this laptop plenty of horsepower; 
Its NVIDIA GeForce GTX 1060 graphics card renders rich immersive visuals; 
Browse and navigate intuitively with the Ultra HD touch screen display;',
2399.99,
"/assets/images/razer-blade.jpg",
3,
8.8,
5,
NOW(),
NOW()
),

("Apple iPad Pro with WiFi - 64GB - Rose Gold", 
"Apple", 
"Immensely powerful, portable, and capable; 
The 10.5-inch iPad Pro features a redesigned Retina display that is the most advanced on the planet; 
The A10X Fusion chip delivers more power than most PC laptops; 
With Apple Pencil, the Smart Keyboard, and iOS—the most advanced mobile operating system—iPad Pro is designed for the world we live in today;",
649.99,
"/assets/images/ipad-pro.jpg",
4,
9.8,
5,
NOW(),
NOW()
),

("Samsung Galaxy Tab with WiFi - 16GB - Black", 
"Samsung", 
'The beautiful 10.1” high-resolution screens makes everything come to life; 
Expand your memory up to an additional 256GB with a microSD card; 
The Galaxy Tab A’s vibrant 10.1" high-resolution screen makes everything come to life; 
Make the most of your time with advanced multitasking tools;',
199.99,
"/assets/images/galaxy-tab.jpg",
4,
9.2,
5,
NOW(),
NOW()
),

("Lenovo - Tab4 10 Plus - Black", 
"Lenovo", 
"The 10.1-inch IPS screen offers easy viewing in any lighting from multiple angles; 
10-point multi-touch function means you can zoom in, zoom out and swipe; 
16GB eMMC memory for storing your files and built-in microSD slot for extra storage; 
8MP rear camera and 5MP front camera; Dual-antenna Wi-Fi for fewer dropped connections;",
279.99,
"/assets/images/lenovo-tab4.jpg",
4,
9.0,
5,
NOW(),
NOW()
),

("Xbox One X", 
"Microsoft", 
'With 40% more power than any other console, experience immersive true 4K gaming. Games play better on Xbox One X; 
UHD Blu-ray optical disc drive; 
Dual band wireless with Wi-Fi Direct for home networks; 
12GB GDDR5 of graphic memory add speed and power to game performance;',
499.99,
"/assets/images/xbox-one.jpg",
5,
9.0,
5,
NOW(),
NOW()
),

("PlayStation 4 Pro", 
"Sony", 
'Spectacular graphics – Explore vivid game worlds with rich visuals heightened by PS4 Pro; 
Enhanced gameplay – Support for faster frame rates delivers super-sharp action for select PS4 games; 
One unified gaming community – Compatible with every PS4 game. Play online with other PS4 players with PlayStation Plus; 
Extraordinary entertainment – With up to 4K streaming and 4K auto-upscaling for video content;',
399.99,
"/assets/images/ps4-pro.jpg",
5,
9.0,
5,
NOW(),
NOW()
),

("Nintendo Switch with Gray Joy-Con", 
"Nintendo", 
'This Nintendo Switch console includes the Joy-Con detachable controller; 
Docks with your television or stands alone on a tabletop for outdoor action on its 6.2-inch screen; 
Nintendo Switch can connect to the Internet wirelessly; 
Each Joy-Con includes a gyroscope and accelerometer;',
299.99,
"/assets/images/nintendo-switch.jpg",
5,
9.6,
5,
NOW(),
NOW()
),

("Apple Watch Series 3 - GPS - 42mm - Space Gray Aluminum", 
"Apple", 
'Measure your workouts, from running and cycling to new high-intensity interval training; 
GPS and a barometric altimeter track how far and high you go; 
New dual-core processor for faster app performance; 
Swimproof so you’re always ready for the pool or ocean;',
359.99,
"/assets/images/apple-watch.jpg",
6,
9.6,
5,
NOW(),
NOW()
),

("Samsung Gear S3 Frontier Smartwatch 46mm - Dark Grey", 
"Samsung", 
'1.3" Super AMOLED touch-screen display with 360 x 360 resolution; 
Turn the bezel to scroll through apps, messages and long text; 
Gives you the freedom to explore and allows you to stay on track at any weather conditions; 
Bluetooth 4.2 connectivity and NFC technology enables simple one-touch pairing;',
299.99,
"/assets/images/samsung-s3-watch.jpg",
6,
9.4,
5,
NOW(),
NOW()
),

("Huawei Watch 2 Classic – Titanium Grey", 
"Huawei", 
'Built-in GPS and continuous heart rate: monitor your heart rate and track your workout routes without your phone; 
Get real-time guidance and workout data such as recovery time and Vo2 Max; 
NFC and Google assistant: make payments and have a personal voice assistant from your wrist; 
Android Wear 2.0 Supported Mobile OS: Android 4.4+, OS 9.0;',
299.99,
"/assets/images/huawei-watch2.jpg",
6,
8.2,
5,
NOW(),
NOW()
),

("Fitbit Ionic", 
"Fitbit", 
'See pace, distance and other key stats on display, while recording elevation climbed, split times & a map of your route; 
Battery life of 5 days and up to 10 hours when using GPS, so you can track day to night without charging; 
Wear your watch in the pool or rain & use it to track swim workouts with stats like lap counting, duration and calories burned; 
Get continuous, automatic, wrist-based heart rate & simplified heart rate zone;',
299.95,
"/assets/images/fitbit-ionic.png",
7,
8.0,
5,
NOW(),
NOW()
),

("TomTom Spark 3 + Bluetooth headphones", 
"TomTom", 
'Waterproof Sport Watch: Multisport Mode tracks all your indoor and outdoor sports, including every run, cycle, swim and gym workout; 
GPS Running Watch and Activity Tracker: Measures time, distance, speed, pace, calories burned and sleep; 
Route exploration: Discover new routes, push your boundaries and never run the same route twice; 
Understand how fit you are by comparing your fitness level with others of the same age and gender group;',
189.99,
"/assets/images/tomtom-spark3.jpg",
7,
7.0,
5,
NOW(),
NOW()
),

("Samsung Gear Fit2 Smartwatch - Large - Black", 
"Samsung", 
'Track your step count, calories burned, heart rate, sleep quality and more; 
Receive and respond to notifications, calls and texts right on your wrist; 
Store your favorite music on the GearFit2 or connect with Spotify to access millions of songs; 
Map your activity accurately with the built-in GPS;',
149.95,
"/assets/images/gear-fit2.jpg",
7,
7.6,
5,
NOW(),
NOW()
),

("Sonos One - 2 Room Sound System", 
"Sonos", 
'With this pair of Sonos Ones start and control your music with your voice. Amazon Alexa built right in; 
Pair your Sonos Ones together in the same room for stereo sound; 
Get the latest weather updates, flash briefings and sports scores, set timers, and enjoy all those other helpful Amazon Alexa skills; 
Amazon Music, Spotify, Apple Music, internet radio and 80 other streaming services globally;',
349.00,
"/assets/images/sonos-bt-spkrs.png",
8,
7.4,
5,
NOW(),
NOW()
),

("Bowers & Wilkins Zeppelin Wireless HiFi Speaker - Black", 
"Bowers & Wilkins", 
'Two midrange drivers with FST technology and a 6.5" subwoofer for deep bass to be played at an impressive volume; 
Supported by Bowers & Wilkins free control app for easy setup. Dimentions: Height 188mm Width 660mm Depth 183mm; 
Amplifier power output: 2x 25W (tweeter), 2x 25W (midrange), 1x 50W (subwoofer); 
the combination of Air Play, Bluetooth aptX and Spotify Connect means pristine sound is only a couple of button presses away;',
699.99,
"/assets/images/bwz-wireless-spkr.jpg",
8,
8.6,
5,
NOW(),
NOW()
),

("JBL Charge 3 - Black", 
"JBL", 
'Up to 20 hrs of playing time with the 22.2Wh Lithium-ion Polymer battery; 
Battery charge time is 4.5 hrs; 
2 x 10W power output with 2 x 50mm transducers; 
Frequency response of 65Hz - 20kHz and >80dB signal-to-noise-ratio; 
Take crystal clear calls from your speaker with the touch of a button; 
No more worrying about rain or spills, you can even submerge the Charge 3 in water;',
149.95,
"/assets/images/jbl-charge3.jpg",
8,
9.0,
5,
NOW(),
NOW()
);

SELECT * FROM products;

INSERT INTO subscriptions (tier_name, monthly_cost, num_devices, num_days, createdAt, updatedAt)
VALUES
("pay as you go", 00.00, 1, 5, NOW(),NOW()),
("basic", 9.99, 3, 5, NOW(),NOW()),
("gold", 14.99, 3, 7, NOW(),NOW()),
("pro-tester", 29.99, 10, 7, NOW(),NOW());

SELECT * FROM subscriptions;

INSERT INTO users (user_firstname, user_lastname, user_email, user_password, address_street, address_city, address_state, address_zip, payment_method, agreement_signed, user_subscription, date_registered, createdAt, updatedAt) 
VALUES
("John", "Smith", "jsmith@gmail.com", "HelloWorld", "4500 Bainbridge Road", "Euclid", "OH", "44236", "credit card", true, 1, "2017-12-02", NOW(), NOW()),			
("Mel", "Brooks", "mel.brooks@gmail.com", "trytech", "490 Euclid Ave", "Euclid", "OH", "44236", "credit card", true, 1, "2017-12-24", NOW(), NOW()), 				
("Bill", "Pettiti", "pettiti250h@gmail.com", "thisIsCool", "23500 Pettibone Road", "Bainbridge", "OH", "44100", "paypal", true, 2, "2018-01-05", NOW(), NOW()), 		
("Suzie", "Banshee", "thebanshee@outlook.com", "loveTryTech", "200 Hollywood Blvd", "Beverley Hills", "CA", "90210", "voucher", false, 1, "2018-02-02", NOW(), NOW());	

SELECT * FROM users;

INSERT INTO tries (UserId, ProductId, active_startdate, active_mailed, createdAt, updatedAt)
VALUES
(2,6,NOW(),NOW(),NOW(),NOW()),
(2,3,NOW(),NOW(),NOW(),NOW()),
(2,10,NOW(),NOW(),NOW(),NOW()),
(1,2,NOW(),NOW(),NOW(),NOW()),
(1,6,NOW(),NOW(),NOW(),NOW()),
(2,6,NOW(),NOW(),NOW(),NOW()),
(3,7,NOW(),NOW(),NOW(),NOW()),
(3,8,NOW(),NOW(),NOW(),NOW()),
(3,11,NOW(),NOW(),NOW(),NOW()),
(3,2,NOW(),NOW(),NOW(),NOW()),
(3,1,NOW(),NOW(),NOW(),NOW()),
(4,2,NOW(),NOW(),NOW(),NOW());

SELECT * FROM tries;

INSERT INTO completeds (UserId, ProductId, comleted_subscription, completed_dateout, completed_dateback, createdAt, updatedAt)
VALUES
(2,3,1,NOW(),NOW(),NOW(),NOW()),
(2,5,2,NOW(),NOW(),NOW(),NOW()),
(2,8,1,NOW(),NOW(),NOW(),NOW()),
(1,1,1,NOW(),NOW(),NOW(),NOW()),
(1,6,2,NOW(),NOW(),NOW(),NOW()),
(2,1,3,NOW(),NOW(),NOW(),NOW()),
(3,7,1,NOW(),NOW(),NOW(),NOW()),
(3,11,1,NOW(),NOW(),NOW(),NOW()),
(3,11,2,NOW(),NOW(),NOW(),NOW()),
(3,12,1,NOW(),NOW(),NOW(),NOW()),
(3,7,1,NOW(),NOW(),NOW(),NOW()),
(4,8,2,NOW(),NOW(),NOW(),NOW());

SELECT * FROM completeds;