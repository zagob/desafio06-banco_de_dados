import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmb');

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileHas = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHas}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
