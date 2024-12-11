const express = require('express')
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')


router.get('/', getProducts);   //see all products

router.get('/:id', getProduct); //see one product

router.post('/', createProduct);    //create a product

router.put('/:id', updateProduct);      //update the product

router.delete('/:id', deleteProduct);   //delete the product


module.exports = router;