// Crear un nuevo router para usuarios
const userRouter = express.Router();

// Mover la ruta /api/users/premium/:uid al nuevo router
userRouter.post('/:uid/premium', (req, res) => {
  // Tu lógica para actualizar a un usuario a premium aquí
});

// Agregar el router de usuarios a la aplicación principal
app.use('/api/users', userRouter);
