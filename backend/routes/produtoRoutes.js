import  express  from 'express';
const router = express.Router();

import produtoController from '../controllers/produtoController.js'

router.route('/create')
.post((req, res) => produtoController.create(req, res));

router.route('/')
.get((req, res) => produtoController.showProduto(req, res)); 

export default router;