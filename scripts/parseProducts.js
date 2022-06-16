const fs = require('fs');

const products = require('../server/data/product-list.json');


fs.writeFile('../server/data/products.json', JSON.stringify(products.cart, null, 2), (err) => {
    if (err) {
        console.log(err)
        process.exit()
    }

    process.exit()
})
