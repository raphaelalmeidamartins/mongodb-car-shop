import express from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';
import errorHandler from './middlewares/error';
import carsRoutes from './routes/cars';
import motorcyclesRoutes from './routes/motorcycles';
import swaggerSettingsBr from './swagger-br.json';
import swaggerSettingsEn from './swagger-en.json';

const app = express();

const options = {};

app.use(
  '/docs/br',
  swaggerUI.serveFiles(swaggerSettingsBr, options),
  swaggerUI.setup(swaggerSettingsBr),
);
app.use(
  '/docs/en',
  swaggerUI.serveFiles(swaggerSettingsEn, options),
  swaggerUI.setup(swaggerSettingsEn),
);

app.use(express.json());

app.use('/cars', carsRoutes);
app.use('/motorcycles', motorcyclesRoutes);

app.use(errorHandler);

export default app;
