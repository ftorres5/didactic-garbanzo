const { client } = require('./client');

async function getAllProducts() {
  try {
      const { rows } = await client.query(`
      SELECT * FROM products;
      `);
      return rows;
  } catch (error) {
      throw error;
  }
}

async function getSingleProductById(id) {
  try {
      const { rows: [product] } = await client.query(`
      SELECT * FROM products where id = $1;
      `, [id]);
      return product;
  } catch (error) {
      throw error;
  }
}

async function createProduct({ name, price}) {
  try {
    const {rows: [product]} = await client.query(`
      INSERT INTO products(name, price) VALUES ($1, $2)
      RETURNING *
    `, [name, price]);
    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllProducts,
  getSingleProductById,
  createProduct
}
