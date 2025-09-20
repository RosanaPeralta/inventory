const { Pool } = require('pg');
require('dotenv').config();

// Script para inicializar la base de datos PostgreSQL
async function initializeDatabase() {
  const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'inventory_db',
    user: process.env.DB_USER || 'postgres',
    // password: process.env.DB_PASSWORD || 'password',
  });

  try {
    console.log('Conectando a PostgreSQL...');
    
    // Crear la tabla products
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        quantity INTEGER NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Tabla products creada exitosamente');

    // Verificar si ya hay datos
    const result = await pool.query('SELECT COUNT(*) FROM products');
    const count = parseInt(result.rows[0].count);

    if (count === 0) {
      console.log('Insertando datos de ejemplo...');
      
      const sampleProducts = [
        ['Laptop Pro', 'Electronics', 15, 1299.99, 'High-performance laptop'],
        ['Wireless Mouse', 'Electronics', 45, 29.99, 'Ergonomic wireless mouse'],
        ['Office Chair', 'Furniture', 8, 199.99, 'Comfortable office chair'],
        ['Coffee Beans', 'Food', 120, 12.99, 'Premium coffee beans'],
        ['Notebook Set', 'Office Supplies', 200, 8.99, 'Pack of 3 notebooks']
      ];

      for (const product of sampleProducts) {
        await pool.query(
          'INSERT INTO products (name, category, quantity, price, description) VALUES ($1, $2, $3, $4, $5)',
          product
        );
      }
      console.log('✅ Datos de ejemplo insertados exitosamente');
    } else {
      console.log(`ℹ️  La tabla ya contiene ${count} productos`);
    }

    console.log('🎉 Base de datos inicializada correctamente');
    
  } catch (error) {
    console.error('❌ Error inicializando la base de datos:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  initializeDatabase();
}

module.exports = { initializeDatabase };

