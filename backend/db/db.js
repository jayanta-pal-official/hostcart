import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'myadmin',
  password: process.env.DB_PASSWORD || 'jayanta_123',
  database: process.env.DB_NAME || 'vps_management',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default db;