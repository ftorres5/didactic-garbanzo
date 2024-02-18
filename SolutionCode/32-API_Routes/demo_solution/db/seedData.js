// require in the database adapter functions as you write them (createUser, createActivity...)
const { createProduct } = require('./');
const { client } = require('./client');

// drop tables in the correct order
async function dropTables() {
  console.log('Dropping All Tables...');
  // drop all tables, in the correct order
  try {
    await client.query(`
    DROP TABLE IF EXISTS products;
  `)
  } catch (error) {
    throw error;
  }
}

// create tables in the correct order
async function createTables() {
  try {
    console.log("Starting to build tables...");
    // create all tables, in the correct order
    // create products table
    await client.query(`
      CREATE TABLE products(
        id  SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        price NUMERIC NOT NULL
      );
    `)
    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

// create initial products
async function createInitialProducts() {
  console.log('Starting to create products...');
  try {

    const productsToCreate = [
      { name: 'Headphones', price: 29.99 },
      { name: 'Speaker', price: 50.29 },
    ]
    const products = await Promise.all(productsToCreate.map(createProduct));

    console.log('Products created:');
    console.log(products);
    console.log('Finished creating products!');
  } catch (error) {
    console.error('Error creating products!');
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialProducts();

  } catch (error) {
    console.log('Error during rebuildDB')
    throw error;
  }
}

module.exports = {
  rebuildDB
};
