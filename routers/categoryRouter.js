const Category = require("../models/categorySchema");
const express = require("express");
const router = express.Router();

const getCategory = require('../controllers/category/getCategory');
const getCategoryId = require('../controllers/category/getCategoryId');
const postCategory  = require('../controllers/category/postCategory');
const putCategory = require('../controllers/category/putCategory');
const deleteCategory = require('../controllers/category/deleteCategory');


router.get(`/`,getCategory);
router.get(`/:id`,getCategoryId);
router.post("/",postCategory);
router.put("/:id",putCategory);
router.delete("/:id",deleteCategory);


module.exports = router;
