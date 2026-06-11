const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const product = new Product({ ...req.body, seller: req.user?._id });
    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("seller", "name");
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "seller",
      "name",
    );
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
