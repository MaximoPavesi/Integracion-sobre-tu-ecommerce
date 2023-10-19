const userSchema = new mongoose.Schema({
    // Otras propiedades del usuario
    documents: [
      {
        name: String,
        reference: String
      }
    ],
    last_connection: Date
  });
  
  const User = mongoose.model('User', userSchema);
  