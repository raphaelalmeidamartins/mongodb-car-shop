import { isValidObjectId, Model as MongoModel } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class Model<Entity> implements IModel<Entity> {
  constructor(protected _repository: MongoModel<Entity>) {}

  public async create(data: Entity): Promise<Entity> {
    return this._repository.create({ ...data });
  }

  protected static validateId(_id: string): void {
    if (!isValidObjectId(_id)) throw new Error('InvalidMongoId');
  }

  public async read(): Promise<Entity[]> {
    return this._repository.find();
  }

  public async readOne(_id: string): Promise<Entity | null> {
    Model.validateId(_id);
    return this._repository.findById(_id);
  }

  public async update(_id: string, data: Entity): Promise<Entity | null> {
    Model.validateId(_id);
    return this._repository.findByIdAndUpdate({ _id }, { ...data }, { new: true });
  }

  public async delete(_id: string): Promise<Entity | null> {
    Model.validateId(_id);
    return this._repository.findByIdAndDelete({ _id });
  }
}

export default Model;
