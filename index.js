const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js"); //fetch schema
const productRoutes = require("./routes/product.route.js");
import { config } from "dotenv";
config();
const app = express();

//middleware to use json and form types
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoutes);

//for generalization
app.get("/", (req, res) => {
  res.send("Hello from Node API server Updated!");
});

//if in one file i.e. NO MVC
// //read api
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch {
//     res.status(500).json({ message: error.message });
//   }
// });

// //read api of a particular product using its id
// app.get("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch {
//     res.status(500).json({ message: error.message });
//   }
// });

// //update api
// app.put("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch {
//     res.status(500).json({ message: error.message });
//   }
// });

// //delete api
// app.delete("/api/product/:id", async (req, res) => {
//     try{
//         const {id} = req.params;

//         const product = await Product.findByIdAndDelete(id);

//         if(!product) {
//             return res.status(404).json({message: "Product not found"})
//         }

//         res.status(200).json({message: "Product deleted succesfully"});
//     } catch {
//         res.status(500).json({message: error.message});
//     }
// })

// //create api
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database!"),
      app.listen(3000, () => {
        console.log("Server is running on port 3000");
      });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
