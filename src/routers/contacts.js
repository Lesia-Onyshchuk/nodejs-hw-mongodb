import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
} from '../controllers/contacts.js';

const router = Router();

export const getAllContactsRouter = () =>
  router.get('/contacts', getAllContactsController);

export const getContactByIdRouter = () =>
  router.get('/contacts/:contactId', getContactByIdController);
