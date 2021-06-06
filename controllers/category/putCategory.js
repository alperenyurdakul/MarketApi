const Category = require('../../models/categorySchema');

module.exports = async(req,res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          icon: req.body.icon || category.icon,
          color: req.body.color,
        },
        { new: true }
      );
    
      if (!category) return res.status(400).send("the category cannot be created!");
    
      res.send(category);
};