import { NextFunction, Request, Response } from 'express';
import StatusCodes from '../helpers/StatusCodes';
import { IController } from '../interfaces/IController';
import Service from '../services/Service';

abstract class Controller<Entity> implements IController {
  constructor(protected _service: Service<Entity>) {
    this.register = this.register.bind(this);
  }

  public async register(req: Request, res: Response, _next?: NextFunction): Promise<void> {
    const document = await this._service.create(req.body);

    res.status(StatusCodes.Created).json(document);
  }
}

export default Controller;
