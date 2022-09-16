import { model as createModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import Model from './Model';

const carMongooseSchema = new Schema<ICar>({
  model: String,
  year: String,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, {
  versionKey: false,
});

class Car extends Model<ICar> {
  constructor(_repository = createModel('Car', carMongooseSchema)) {
    super(_repository);
  }
}

export default Car;
