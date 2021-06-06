const Category = require('../../models/categorySchema');

module.exports = async (req,res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
      });
      category = await category.save();
    
      if (!category) return res.status(400).send("the category cannot be created!");
    
      res.send(category);
};
