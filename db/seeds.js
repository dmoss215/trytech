/*let db = require('../models')

var NOW = () => Date.now()

db.sequelize.sync().then(() => {
    const {
        User,
        Category
    } = db;
    [
        "phones",
        "headphones",
        "laptops/computers"
    ].forEach(name => Category.create({
        category_name: name,
        createdAt: NOW(),
        updatedAt: NOW()
    }));
});*/

