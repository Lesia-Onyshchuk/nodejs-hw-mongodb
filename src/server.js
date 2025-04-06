import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import {
  errorRouter,
  getAllContactsRouter,
  getContactByIdRouter,
  notFoundRouter,
} from './routers/contacts.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(getAllContactsRouter);

  app.use(getContactByIdRouter);

  app.use(notFoundRouter);

  app.use(errorRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
