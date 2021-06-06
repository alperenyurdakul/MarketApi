const Order = require("../../models/orderSchema");

module.exports = async (req,res) => {
    const totalSales = await Order.aggregate([
        { $group: { _id: null, totalsales: { $sum: "$totalPrice" } } },
      ]);
    
      if (!totalSales) {
        return res.status(400).send("The order sales cannot be generated");
      }
    
      res.send({ totalsales: totalSales.pop().totalsales });
}