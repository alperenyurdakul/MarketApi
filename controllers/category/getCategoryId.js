const Category = require('../../models/categorySchema');

module.exports = async (req,res) => {
    const category = await Category.findById(req.params.id);

  if (!category) {
    res
      .status(500)
      .json({ message: "The category with the given ID was not found." });
  }
  res.status(200).send(category);
}