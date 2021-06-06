const Order = require("../../models/orderSchema");

module.exports = async (req,res) => {
    const orderCount = await Order.countDocuments((count) => count);

  if (!orderCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    orderCount: orderCount,
  });
}