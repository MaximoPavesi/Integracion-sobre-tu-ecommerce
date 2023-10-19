userRouter.post('/:uid/premium', (req, res) => {
    const requiredDocuments = ['Identificación', 'Comprobante de domicilio', 'Comprobante de estado de cuenta'];
    const userDocuments = req.body.documents; // Asumiendo que los documentos se envían en el cuerpo de la solicitud
  
    // Verificar si todos los documentos requeridos están presentes en los documentos del usuario
    const documentsPresent = requiredDocuments.every(doc => userDocuments.some(d => d.name === doc));
  
    if (documentsPresent) {
      // Actualizar al usuario a premium
      // Actualizar last_connection
      // Enviar una respuesta exitosa
    } else {
      res.status(400).json({ error: 'El usuario no ha terminado de procesar su documentación.' });
    }
  });
  