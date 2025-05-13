const sequelize = require('./db');
const Role = require('../models/role.model');
const User = require('../models/user.model');
const Auth = require('../models/auth.model');
const Post = require('../models/post.model');
const Like = require('../models/like.model');
const Comment = require('../models/comment.model');
const bcrypt = require('bcrypt');

// Función para inicializar la base de datos
async function initializeDatabase() {
  try {
    // Sincronizar todos los modelos con la base de datos
    // La opción force: true eliminará las tablas existentes y creará nuevas
    console.log('Sincronizando base de datos...');
    await sequelize.sync({ force: true });
    console.log('Sincronización completada.');

    // Crear roles por defecto
    console.log('Creando roles...');
    const adminRole = await Role.create({
      name: 'admin'
    });

    const userRole = await Role.create({
      name: 'user'
    });
    console.log('Roles creados.');

    // Crear un usuario administrador por defecto
    console.log('Creando usuario administrador...');
    const adminUser = await User.create({
      first_name: 'Admin',
      last_name: 'User',
      email: 'admin@example.com',
      telephone: '1234567890',
      role_id: adminRole.id
    });

    // Crear la autenticación para el usuario administrador
    console.log('Creando autenticación para el administrador...');
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await Auth.create({
      id: adminUser.id,
      email: adminUser.email,
      password: hashedPassword
    });

    // Crear un usuario normal por defecto
    console.log('Creando usuario normal...');
    const normalUser = await User.create({
      first_name: 'Normal',
      last_name: 'User',
      email: 'user@example.com',
      telephone: '0987654321',
      role_id: userRole.id
    });

    // Crear la autenticación para el usuario normal
    console.log('Creando autenticación para el usuario normal...');
    const normalHashedPassword = await bcrypt.hash('user123', 10);
    await Auth.create({
      id: normalUser.id,
      email: normalUser.email,
      password: normalHashedPassword
    });

    console.log('Base de datos inicializada correctamente.');
    console.log('Credenciales de administrador:');
    console.log('Email: michaelcorrea@gmail.com');
    console.log('Contraseña: admin123');
    console.log('Credenciales de usuario normal:');
    console.log('Email: tefa@gmail.com');
    console.log('Contraseña: user123');

  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  } finally {
    process.exit();
  }
}

// Ejecutar la función
initializeDatabase();