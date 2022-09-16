import { model as createModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import Model from './Model';

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, {
  versionKey: false,
});

class Motorcycle extends Model<IMotorcycle> {
  constructor(_repository = createModel('Motorcycle', motorcycleMongooseSchema)) {
    super(_repository);
  }
}

export default Motorcycle;
