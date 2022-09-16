import { Router } from 'express';
import CarController from '../controllers/CarController';
import Car from '../models/Car';
import CarService from '../services/CarService';

const carsRoutes = Router();

const carModel = new Car();
const carService = new CarService(carModel);
const carController = new CarController(carService);

carsRoutes.post('/', carController.register);
carsRoutes.get('/', carController.list);
carsRoutes.get('/:id', carController.getById);

export default carsRoutes;
