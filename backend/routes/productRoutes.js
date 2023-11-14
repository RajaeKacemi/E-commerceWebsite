const express = require('express');
const router = express.Router();
const {upload} = require('../middleware/upload');
const {addProduct, getAllProducts, searchProducts, getProduct, updateProduct, deleteProduct} = require('../controllers/productController.js');
const {authorization, checkAdminOrManager, checkAdmin} = require('../middleware/authMiddleware');

//, checkAdminOrManager
router.post('/products', upload, addProduct);
router.get('/products', (req, res, next) => {
    return (Object.keys(req.query).length > 0 ) ? (searchProducts(req, res, next)) : (getAllProducts(req, res, next));
});
// , checkAdminOrManager

router.patch('/products/:id', updateProduct);
router.get('/products/:id', getProduct);
//, checkAdminOrManager
router.delete('/products/:id', deleteProduct);


module.exports = router;
