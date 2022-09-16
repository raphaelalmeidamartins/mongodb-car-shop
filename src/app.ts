import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import carsRoutes from './routes/cars';

const app = express();

app.use(express.json());

app.use('/cars', carsRoutes);

app.use(errorHandler);

export default app;
