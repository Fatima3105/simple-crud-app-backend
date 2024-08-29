// const express = require("express");
// const Product = require("../models/product.model.js")
// const productRoute = require("./routes/product.route.js")
// const router = express.Router();
// const { getProducts, getProduct, createProduct, updateProduct , deleteProduct} = require('../controllers/product.controller.js');
// router.get('/', async (req, res) =>{
// try{
//     const products = await product.find({});
//     res.status(200).json(products);

// }
// catch(error){
//     res.status(500).json({ message: error.message });
// }
// router.get('/', getProducts);
// router.get("/:id", getProduct);
// router.post("/", createProduct);
// //update a product 
// router.put("/:id", updateProduct);
// //delete a product 
// router.delete("/:id", deleteProduct);
// module.exports = router;

const express = require("express");
const Product = require("../models/product.model.js"); // Correct reference
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

// Ensure all imports and references are correct

// Define your routes
router.get('/', getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
// Update a product 
router.put("/:id", updateProduct);
// Delete a product 
router.delete("/:id", deleteProduct);

// Export the router
module.exports = router;
