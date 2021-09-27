import 'reflect-metadata';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import './database';
import { routes } from './routes';

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
