import { NextFunction, Request, Response } from 'express';

export interface IController {
  register(req: Request, res: Response, next: NextFunction): void;
}
