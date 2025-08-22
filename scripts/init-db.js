const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

async function initializeDatabase() {
  console.log('Inicializando base de datos...');
  
  const db = await open({
    filename: path.join(process.cwd(), 'database.db'),
    driver: sqlite3.Database
  });

  // Crear tablas
  await db.exec(`
    DROP TABLE IF EXISTS points_transactions;
    DROP TABLE IF EXISTS restaurants;
    DROP TABLE IF EXISTS users;
    
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL
    );

    CREATE TABLE restaurants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      address TEXT
    );

    CREATE TABLE points_transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      restaurant_id INTEGER NOT NULL,
      points INTEGER NOT NULL,
      type TEXT CHECK(type IN ('earn', 'redeem')) NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
    );
  `);

  // Insertar usuarios
  await db.run(`INSERT INTO users (name, email) VALUES 
    ('Juan Pérez', 'juan@email.com'),
    ('María García', 'maria@email.com'),
    ('Carlos López', 'carlos@email.com'),
    ('Ana Martínez', 'ana@email.com'),
    ('Pedro Rodríguez', 'pedro@email.com')`);

  // Insertar restaurantes
  await db.run(`INSERT INTO restaurants (name, address) VALUES 
    ('Pizza Express', 'Calle Principal 123'),
    ('Burger House', 'Avenida Central 456'),
    ('Sushi Time', 'Plaza Mayor 789')`);

  // Transacciones para Juan (id=1) - Total: 450 puntos
  await db.run(`INSERT INTO points_transactions (user_id, restaurant_id, points, type, created_at) VALUES 
    (1, 1, 100, 'earn', datetime('now', '-10 days')),
    (1, 1, 200, 'earn', datetime('now', '-8 days')),
    (1, 2, 150, 'earn', datetime('now', '-6 days')),
    (1, 1, -50, 'redeem', datetime('now', '-4 days')),
    (1, 2, 100, 'earn', datetime('now', '-2 days')),
    (1, 1, -50, 'redeem', datetime('now', '-1 days'))`);

  // Transacciones para María (id=2) - Total: 150 puntos
  await db.run(`INSERT INTO points_transactions (user_id, restaurant_id, points, type, created_at) VALUES 
    (2, 2, 100, 'earn', datetime('now', '-7 days')),
    (2, 3, 150, 'earn', datetime('now', '-5 days')),
    (2, 2, -100, 'redeem', datetime('now', '-3 days'))`);

  // Transacciones para Carlos (id=3) - Total: 0 puntos
  await db.run(`INSERT INTO points_transactions (user_id, restaurant_id, points, type, created_at) VALUES 
    (3, 1, 200, 'earn', datetime('now', '-15 days')),
    (3, 1, -200, 'redeem', datetime('now', '-10 days'))`);

  // Ana (id=4) - Total: 750 puntos
  await db.run(`INSERT INTO points_transactions (user_id, restaurant_id, points, type, created_at) VALUES 
    (4, 1, 300, 'earn', datetime('now', '-20 days')),
    (4, 2, 200, 'earn', datetime('now', '-18 days')),
    (4, 3, 250, 'earn', datetime('now', '-15 days')),
    (4, 1, 100, 'earn', datetime('now', '-12 days')),
    (4, 2, -100, 'redeem', datetime('now', '-8 days'))`);

  // Pedro (id=5) - Sin transacciones

  console.log('✅ Base de datos inicializada con éxito');
  console.log('Usuarios creados: 5');
  console.log('Restaurantes creados: 3');
  console.log('Transacciones creadas: 14');
  
  await db.close();
}

initializeDatabase().catch(console.error);