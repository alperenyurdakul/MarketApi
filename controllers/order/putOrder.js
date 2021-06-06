const Order = require("../../models/orderSchema");

module.exports = async (req,res) => {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        { new: true }
      );
    
      if (!order) return res.status(400).send("the order cannot be update!");
    
      res.send(order);
}