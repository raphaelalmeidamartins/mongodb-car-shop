import { ZodSchema } from 'zod';
import { ErrorTypes } from '../helpers/ErrorCatalog';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

abstract class Service<Entity> implements IService<Entity> {
  constructor(protected _model: IModel<Entity>, protected _zodSchema: ZodSchema<Entity>) {}

  protected parseData(data: Entity): void {
    const parsed = this._zodSchema.safeParse(data);
    if (!parsed.success) throw parsed.error;
  }

  public async create(data: Entity): Promise<Entity> {
    this.parseData(data);
    return this._model.create(data);
  }

  public async read(): Promise<Entity[]> {
    return this._model.read();
  }

  public async readOne(_id: string): Promise<Entity | null> {
    const document = await this._model.readOne(_id);
    if (!document) throw new Error(ErrorTypes.EntityNotFound);
    return document;
  }

  public async update(_id: string, data: Entity): Promise<Entity | null> {
    await this.readOne(_id);
    this.parseData(data);
    return this._model.update(_id, data);
  }

  public async delete(_id: string): Promise<Entity | null> {
    return this._model.delete(_id);
  }
}

export default Service;
