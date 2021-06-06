const Category = require('../../models/categorySchema');

module.exports = async (req,res)=> {
    const categoryList = await Category.find();
  
    if (!categoryList) {
      res.status(500).json({ success: false });
    }
    res.status(200).send(categoryList);
  };