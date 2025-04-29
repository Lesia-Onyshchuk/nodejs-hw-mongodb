import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserShema } from '../validation/auth.js';
import { ctrlController } from '../utils/ctrlWrapper.js';
import { registerUserController } from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserShema),
  ctrlController(registerUserController),
);

export default router;
