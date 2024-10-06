const express = require('express');

const cors = require('cors');

// const writersbooks = require('./models/writersbooks.js');

const app = express();

app.use(cors({
  origin: '*',  // Allow all origins temporarily for testing
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


module.exports = app;  // Ensure the app is exported for Vercel
