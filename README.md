# Product-Cart


## Description
This is a sample project to demonstrate a Product to Cart React App. Products can be added to the cart and the total will be calculated and displayed to the user in a cart. The app is built using React, Sass, Webpack, and includes Jest. The server is built with express to serve products.


## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Extra Notes](#extra-notes)

* [Tests](#tests)

## Installation

To install necessary dependencies, run the following command from the root folder:

```
npm run build
```

or

Inside of both the client and server folder run the following command:
```
npm i
```


## Usage

In order to use the server, a products.json file is needed inside of the server folder.

The products.json file should have an array of objects with the minimum properties below:

```
[
    {
        "imgUrl": String,
        "product": String, // consider product as the product id.
        "productName": String,
        "price": Float,
        "quantity": Int
    }
]
```
\
An .env file is needed to set the site title. The title is also used as the top left logo. You may use the .env.EXAMPLE file or you can create your own .env file with the following information:
```
SITE_TITLE="title"
```
\
To start the app locally, start the server by running the following command from the root or server folder:
```
npm start
```

Then start the webpack development server by running the following command from the client folder:
```
npm start
```
\
To build a "production" version of the app to serve from the server, run the following command from the root folder:
```
npm run build-deploy
```
Remember that a products.json file is necessary to start the server.
\
\
Start the "production" server by running the following from the root of the folder:
```
npm start
```
\
Occasionally you may need to build a new "production" version of the app due to caching issue, if you need to rebuild, you should first do a cleanup by running the following command from the root of the folder:
```
npm run clean-up
```
Alternatively, you can delete the created "app" folder in the server folder.
\
\
When complete, just build the "production" version again.


## Extra Notes
The scripts folder is for personal use and can be ignored or removed. You can add your own scripts there or remove the folder.
The script-products script inside of the root package.json can also be ignored or removed.

## Tests

To run tests, run the following command from the root folder or inside the client folder:
```
npm test
```
\
\
If you need to update the jest snapshot run the following command from the client folder:
```
npm run test-update-snapshot
```

## Demo

A demo can be found at the link below:  
[https://safe-lowlands-07257.herokuapp.com](https://safe-lowlands-07257.herokuapp.com)

## See More

You can find more of my work at [hex28](https://github.com/hex28/).