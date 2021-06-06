const Product = require('../../models/productSchema');
const Category = require('../../models/categorySchema');

module.exports = async (req,res) => {
    const count = req.params.count ? req.params.count : 0;
    const products = await Product.find({ isFeatured: true }).limit(+count);

    if (!products) {
        res.status(500).json({ success: false });
    }
    res.send(products);
}