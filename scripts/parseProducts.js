const fs = require('fs');

const products = require('../server/product-list.json');


fs.writeFile('../server/products.json', JSON.stringify(products.cart, null, 2), (err) => {
    if (err) {
        console.log(err)
        process.exit()
    }

    process.exit()
})
