import path from 'node:path';

export const contactType = ['work', 'home', 'personal'];

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
};
