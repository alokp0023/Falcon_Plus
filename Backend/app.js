const express = require('express');
const pool = require('./db'); // Assuming your db.js is in the same directory
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.get('/users', async (req, res) => {
//   try {
//     const { rows } = await pool.query('SELECT * FROM users');
//     res.json(rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
app.get('/users', async (req, res) => {
    console.log('Received GET request to /users');
    try {
      const { rows } = await pool.query('SELECT * FROM users');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  

