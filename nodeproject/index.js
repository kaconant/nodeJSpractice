let express = require('express')
let bodyParser = require('body-parser')

// Create our app and parser
let app = express()
let parser = bodyParser.json()

// Wire up the body parser
app.use(parser)

// Products dictionary
let productsDict = {}
let id = 0

// This is our status route
app.get('/status', (request, response) => {
    response.send('{"status": "on" }')
})

// Gets all products
app.get('/products', (request, response) => {
    let arrayOfProducts = []
    for (key in productsDict) {
        arrayOfProducts.push(productsDict[key])
    }
    response.send(arrayOfProducts);
})

// Creates a new product
app.post('/products', (request, response) => {
    // Get the new product from the request body
    let newProduct = request.body;

    // Generate/set the new ID
    newProduct.id = id;
    productsDict[id] = newProduct;

    // Increment ID for the next post
    id++;

    // Send back the new product
    response.json(newProduct); 
})

// Updates a target product
app.put('/products/:id', (request, response) => {
    // Get the updated product
    let updatedProduct = request.body
    // We need to convert the parameter to a number.
    // URL params are always and forever strings.
    let id = Number(request.params.id)
    
    // Check to see if the product exists. If it doesn't, 
    // we want to return a 404 Not Found.
    if (productsDict[id]) {
        updatedProduct.id = id 
        productsDict[id] = updatedProduct
        response.json(updatedProduct)
    } else {
        response.status(404).send('Not found');
    }
})

// Deletes a target product
app.delete('/products/:id', (request, response) => {
})

// tell the app which port to listen on
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})