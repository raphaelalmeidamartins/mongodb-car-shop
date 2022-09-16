import { NextFunction, Request, Response } from 'express';
import StatusCodes from '../helpers/StatusCodes';
import { IController } from '../interfaces/IController';
import Service from '../services/Service';

abstract class Controller<Entity> implements IController {
  constructor(protected _service: Service<Entity>) {
    this.register = this.register.bind(this);
    this.list = this.list.bind(this);
    this.getById = this.getById.bind(this);
  }

  public async register(req: Request, res: Response, _next?: NextFunction): Promise<void> {
    const document = await this._service.create(req.body);

    res.status(StatusCodes.Created).json(document);
  }

  public async list(_req: Request, res: Response, _next?: NextFunction): Promise<void> {
    const documents = await this._service.read();

    res.status(StatusCodes.Ok).json(documents);
  }

  public async getById(req: Request, res: Response, _next?: NextFunction): Promise<void> {
    const document = await this._service.readOne(req.params.id);

    res.status(StatusCodes.Ok).json(document);
  }
}

export default Controller;
