import { ICar, ICarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import Service from './Service';

class CarService extends Service<ICar> {
  constructor(_model: IModel<ICar>) {
    super(_model, ICarZodSchema);
  }
}

export default CarService;
