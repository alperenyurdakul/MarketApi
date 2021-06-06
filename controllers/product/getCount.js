const Product = require('../../models/productSchema');
const Category = require('../../models/categorySchema');

module.exports = async(req,res) => {
    const productCount = await Product.countDocuments((count) => count);

    if (!productCount) {
        res.status(500).json({ success: false });
    }
    res.send({
        productCount: productCount
    });
}