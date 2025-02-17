const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/productControllers");

const router = express.Router();


router.route("/products").get(getAllProducts);
router.route("/products").post(createProduct);


module.exports = router