import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    // caminho de onde será salvo o upload do avatar
    destination: tmpFolder,
    // Nao pode ter dois arquivos com mesmo nome
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      // gerar o nome do arquivo junto com o fileHash
      const fileName = `${fileHash} - ${file.originalname}`;
      // file.originalname -> como era o nome do arquivo na maquina do user
      return callback(null, fileName);
    },
  }),
};
