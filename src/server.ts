import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const door = 3333;
const app = express();

app.use(express.json());
app.use('/categories', categoriesRoutes);

app.listen(door, () => console.log('Server is Running!'));
