import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import * as EmailController from '../controllers/emailController';

const router = Router();

router.post('/ping', ApiController.ping);

router.post('/contact', EmailController.contact);

export default router;