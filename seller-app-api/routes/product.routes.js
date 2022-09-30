import {Router} from 'express';
import ProductController from '../controllers/product.controller';
import { authentication } from '../middlewares/index.js';

const router = new Router();
const productController = new ProductController();
router.get('/product',
    productController.list);

router.get('/product/:id',
    authentication(),
    productController.get);

router.post('/product',
    authentication(),
    productController.create);

router.put('/product/:id',
    authentication(),
    productController.update);

router.post('/search',
    productController.search);

router.post('/select',
    productController.select);

router.post('/init',
    productController.init);



export default router;