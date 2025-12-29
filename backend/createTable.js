import db from './db/db.js';

async function createTable() {
  try {
    await db.query(`CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE,
      phone VARCHAR(20),
      password VARCHAR(255)
    )`);
    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  } finally {
    process.exit();
  }
}

createTable();