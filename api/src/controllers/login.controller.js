
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import User from '../models/user.js';

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Verificar si el usuario existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    // Verificar la contraseña
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
    // Generar token de autenticación
    const token = jwt.sign({ email: user.email, id: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
    res.status(200).json({ user: user._id, token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};


export default loginController;