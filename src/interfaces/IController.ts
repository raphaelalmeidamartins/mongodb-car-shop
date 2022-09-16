import { NextFunction, Request, Response } from 'express';

export interface IController {
  register(req: Request, res: Response, next?: NextFunction): void;
  list(req: Request, res: Response, next?: NextFunction): void;
  getById(req: Request, res: Response, next?: NextFunction): void;
  update(req: Request, res: Response, next?: NextFunction): void;
  delete(req: Request, res: Response, next?: NextFunction): void;
}
