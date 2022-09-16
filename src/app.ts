import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import carsRoutes from './routes/cars';
import motorcyclesRoutes from './routes/motorcycles';

const app = express();

app.use(express.json());

app.use('/cars', carsRoutes);
app.use('/motorcycles', motorcyclesRoutes);

app.use(errorHandler);

export default app;
