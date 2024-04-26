import  express  from 'express';
const router = express.Router();

import clientController from '../controllers/clientController.js';

router.route('/create')
.post((req, res) => clientController.create(req, res));

router.route('/')
.get((req, res) => clientController.showClient(req, res));


export default router;







