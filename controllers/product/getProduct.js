const Product = require('../../models/productSchema');
const Category = require('../../models/categorySchema');

module.exports = async(req,res) => {
    try {
        let filter = {};
        if (req.query.categories) {
            filter = { category: req.query.categories.split(',') };
        }
    
        const productList = await Product.find(filter).populate('category');
    
        if (!productList) {
            res.status(500).json({ success: false });
        }
        res.send(productList);
    } catch (err) {
        console.log("v1", err)
        res.status(500).json({ err: err });
    }
}