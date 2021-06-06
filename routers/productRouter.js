const express = require('express');
const router = express.Router();

const multer = require('multer');

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    },
});

const uploadOptions = multer({ storage: storage });



const getProduct = require('../controllers/product/getProduct');
const getProductId = require('../controllers/product/getProductId');
const getCount = require('../controllers/product/getCount');
const getFeatured = require('../controllers/product/getFeatured');
const postProduct = require('../controllers/product/postProduct');
const putGalleryId = require('../controllers/product/putGalleryId');
const putProductId = require('../controllers/product/putProductId');
const deleteProduct = require('../controllers/product/deleteProduct');




router.get(`/`, getProduct);

router.get(`/:id`, getProductId);

router.post(`/`,uploadOptions.single('image'), postProduct);

router.put('/:id',  uploadOptions.single('image'),putProductId);

router.delete('/:id',deleteProduct);

router.get(`/get/count`, getCount);

router.get(`/get/featured/:count`,getFeatured );

router.put('/gallery-images/:id', uploadOptions.array('images', 10),putGalleryId );



module.exports = router;

