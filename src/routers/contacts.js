import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
} from '../controllers/contacts.js';
// import { notFoundHandler } from '../middlewares/notFoundHandler.js';
// import { errorHandler } from '../middlewares/errorHandler.js';
import { ctrlController } from '../utils/ctrlWrapper.js';

const router = Router();

export const getAllContactsRouter = () =>
  router.get('/contacts', ctrlController(getAllContactsController));

export const getContactByIdRouter = () =>
  router.get('/contacts/:contactId', ctrlController(getContactByIdController));

// export const notFoundRouter = () =>
//   router.get('*', ctrlController(notFoundHandler));

// export const errorRouter = () => router.get(ctrlController(errorHandler));

export const postContactRouter = () =>
  router.post('/contacts', ctrlController(createContactController));

export const patchContactRouter = () =>
  router.patch('/contacts/:contactId', ctrlController(patchContactController));
