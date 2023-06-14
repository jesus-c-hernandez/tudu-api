import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes/index';
import { mongo } from './config';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

mongo().then(() => {
  console.log('Conection established');
  app.listen(PORT, () => {
    console.log(`Already by the port ${PORT}`);
  });
});
