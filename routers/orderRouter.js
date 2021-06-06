const express = require("express");
const OrderItem = require("../models/order-item");
const router = express.Router();

const getOrder = require('../controllers/order/getOrder');
const getOrderId = require('../controllers/order/getOrderId');
const getCount = require('../controllers/order/getCount');
const getTotalSales = require('../controllers/order/getTotalSales');
const getUserOrder = require('../controllers/order/getUserOrder');
const postOrder = require('../controllers/order/postOrder');
const putOrder = require('../controllers/order/putOrder');
const deleteOrder = require('../controllers/category/deleteCategory');


router.get(`/`, getOrder);

router.get(`/:id`,getOrderId );

router.post("/",postOrder);

router.put("/:id",putOrder);

router.delete("/:id", deleteOrder);

router.get("/get/totalsales",getTotalSales);

router.get(`/get/count`, getCount);

router.get(`/get/userorders/:userid`, getUserOrder);
 
module.exports = router;
