console.log("hello page");
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); // Ensure this path is correct
const productRoute = require("./routes/product.route.js");
const app = express();
//middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
//routes

app.use("/api/products", productRoute);



// app.listen(3000, () => {
//     console.log("server is running on port 3000");
// });

app.get('/', (req, res) => {
    res.send("hello from node api Server updated");
});

// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product); // Corrected line
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.get('/api/products/:id', async (req, res) => {
//     try{
// const { id } = req.params;
// const product = await Product.findById(id);
// res.status(200).json(products);
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product); // Corrected line
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

//update a product
// app.put('/api/products/:id', async (req, res) => {
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

// });

mongoose.connect("mongodb+srv://fatimaijaz310:OF8SYq4K3MdkWe9q@backenddb.qqhle.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        });
    })
    .catch((error) => {
        console.error("Connection failed:", error.message);
    });


// //delete a product 
// app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product =  await Product.findByIdAndDelete(id);
//         if (!product) {
//             return res.status(404).json({ message: "Product not Found" });
//         }
//         res.status(200).json({ message: "[roduct deleted sucessfully" });
//     }
//     catch (error) {
//         res.status(500).json({ message: error.messasge });
//     }
// })
// app.delete('/api/products/:id', async (req, res) => {  // Notice it's "product" without an "s"
//     try {
//         const { id } = req.params;
//         const product =  await Product.findByIdAndDelete(id);
//         if (!product) {
//             return res.status(404).json({ message: "Product not Found" });
//         }
//         res.status(200).json({ message: "Product deleted successfully" });
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message }); // Correct spelling of "message"
//     }
// });




// const express = require(`express`)
//  const mongoose = require(`mongoose`);
//  const Product = require('./models/product.model.js')

// const app = express()
//  app.use(express.json());


// app.get('/', (req, res) => {
//  res.send(`Hello from node Api Test`)
//  });

// app.post('/api/products', async (req, res) => {
//     try {
//       const product =  await Product.create(req.body);
//       res.status(500).json(product);
//     }

//     catch (error) {
//         res.status(500).json({message: error.message })
//     }
// });


// mongoose.connect("mongodb+srv://fatimaijaz310:OF8SYq4K3MdkWe9q@backenddb.qqhle.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
// console.log("Connected to Database!");
// app.listen(3000, () => {
//     console.log(`Server is running on 3000 port`);
// })
//     .catch((error) => {
//         console.log("Not Connected", error);
//     });

