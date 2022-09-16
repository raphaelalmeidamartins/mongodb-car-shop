import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import Motorcycle from '../models/Motorcycle';
import MotorcycleService from '../services/MotorcycleService';

const motorcyclesRoutes = Router();

const motorcyclesModel = new Motorcycle();
const motorcyclesService = new MotorcycleService(motorcyclesModel);
const motorcyclesController = new MotorcycleController(motorcyclesService);

motorcyclesRoutes.post('/', motorcyclesController.register);
motorcyclesRoutes.get('/', motorcyclesController.list);
motorcyclesRoutes.get('/:id', motorcyclesController.getById);
motorcyclesRoutes.put('/:id', motorcyclesController.update);
motorcyclesRoutes.delete('/:id', motorcyclesController.delete);

export default motorcyclesRoutes;
