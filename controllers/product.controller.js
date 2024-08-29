// // const getProducts = async (req, res) => {
// const Product = require('../models/product.model');
// const getProducts = async (req, res) => {


//     try {
//         const products = await product.find({});
//         res.status(200).json(products);
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
// const getProduct = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product); // Corrected line
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
// const createProduct = async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);

//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
// const updateProduct = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         // res.status(200).json(product);
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
// const deleteProduct = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if (!product) {
//             return res.status(404).json({ message: "Product not Found" });
//         }
//         res.status(200).json({ message: "Product deleted sucessfully" });
//     }
//     catch (error) {
//         res.status(500).json({ message: error.messasge });
//     }
// }
// module.exports = {
//     getProducts,
//     getProduct,
//     createProduct,
//     updateProduct
// }


const Product = require('../models/product.model'); // Corrected import

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // Correct reference
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product); // Corrected line
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not Found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message }); // Correct spelling of "message"
    }
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct // Ensure all functions are exported
};

