const Product = require('../../models/productSchema');
const Category = require('../../models/categorySchema');

module.exports = async(req,res) => {
    const product = await Product.findById(req.params.id).populate('category');

    if (!product) {
        res.status(500).json({ success: false });
    }
    res.send(product);
}