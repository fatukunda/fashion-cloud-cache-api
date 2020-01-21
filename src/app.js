import express from 'express';
import config from 'dotenv';

config.config();
require('./database');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to Fashion Cloud Cache-API' });
});

export default app;
