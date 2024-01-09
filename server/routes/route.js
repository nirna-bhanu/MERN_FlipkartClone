import express from  'express';

import { userSignUp} from '../controller/user-controller.js';
import { userLogIn } from '../controller/user-controller.js';

import { getProducts,getProductById } from '../controller/product-controller.js';




const router = express.Router();


router.post('/signup', userSignUp);
router.post('/login',userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);




export default router;