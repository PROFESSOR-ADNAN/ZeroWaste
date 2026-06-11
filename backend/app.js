const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
// const connectDB = require("./config/db");

const app = express();

app.use(express.json());
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}
app.use(cors());

// connectDB(process.env.MONGO_URI || "mongodb://localhost:27017/zerowaste");

// API routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/donations', require('./routes/api/donations'));
app.use('/api/products', require('./routes/api/products'));
app.use('/api/payments', require('./routes/api/payments'));

// Serve client static in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  );
}

module.exports = app;
