
import bcrypt from 'bcrypt';
import User from '../models/user.js';
 const registerController = async (req, res) => {
  try {
    const { nombre,apellido, email, password,rol } = req.body;
    // Verificar si el usuario ya existe
    console.log(req.body);
    const existingUser = await User.findOne({ where: { email } });

    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    // Crear un nuevo usuario
    console.log(hashedPassword);
    const newUser = new User({
      nombre,
      apellido,
      email,
      password: hashedPassword,
      rol
    });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};


export default registerController;