import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlController } from '../utils/ctrlWrapper.js';

const router = Router();

export const getAllContactsRouter = () =>
  router.get('/contacts', ctrlController(getAllContactsController));

export const getContactByIdRouter = () =>
  router.get('/contacts/:contactId', ctrlController(getContactByIdController));

export const postContactRouter = () =>
  router.post('/contacts', ctrlController(createContactController));

export const patchContactRouter = () =>
  router.patch('/contacts/:contactId', ctrlController(patchContactController));

export const deleteContactRouter = () =>
  router.delete('contacts/:contactId', ctrlController(deleteContactController));
