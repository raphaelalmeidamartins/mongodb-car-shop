import { IModel } from '../interfaces/IModel';
import { IMotorcycle, IMotorcycleZodSchema } from '../interfaces/IMotorcycle';
import Service from './Service';

class MotorcycleService extends Service<IMotorcycle> {
  constructor(_model: IModel<IMotorcycle>) {
    super(_model, IMotorcycleZodSchema);
  }
}

export default MotorcycleService;
