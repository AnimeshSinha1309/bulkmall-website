import { Request, Response } from 'express';

export interface IUserService {
  dummyMessage(req: Request, res: Response): void; // TODO: Delete this
  listUsers(req: Request, res: Response): void;
  insertUser(req: Request, res: Response): void;
  deleteUser(req: Request, res: Response): void;
  updateUser(req: Request, res: Response): void;
}