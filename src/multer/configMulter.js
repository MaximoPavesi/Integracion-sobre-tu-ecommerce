const multer = require('multer');

// Configuración de Multer para almacenar en carpetas diferentes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'profileImage') {
      cb(null, 'uploads/profiles');
    } else if (file.fieldname === 'productImage') {
      cb(null, 'uploads/products');
    } else if (file.fieldname === 'document') {
      cb(null, 'uploads/documents');
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

userRouter.post('/:uid/documents', upload.fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'productImage', maxCount: 1 },
  { name: 'document', maxCount: 3 }
]), (req, res) => {
  // Aquí puedes manejar el proceso de almacenar los documentos en el usuario
});
