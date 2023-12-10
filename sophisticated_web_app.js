/*
 * filename: sophisticated_web_app.js
 * content: A sophisticated web application for managing customer orders
 */

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Create database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Connect to database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Initialize express app
const app = express();

// Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.get('/customers', (req, res) => {
  const query = 'SELECT * FROM customers';

  db.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/orders', (req, res) => {
  const query = 'SELECT * FROM orders';

  db.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/create_customer', (req, res) => {
  const { name, email, address } = req.body;
  const query = `INSERT INTO customers (name, email, address) VALUES ('${name}', '${email}', '${address}')`;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.send('Customer created successfully');
  });
});

app.post('/create_order', (req, res) => {
  const { customer_id, product, quantity } = req.body;
  const query = `INSERT INTO orders (customer_id, product, quantity) VALUES (${customer_id}, '${product}', ${quantity})`;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.send('Order created successfully');
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
