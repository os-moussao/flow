import { User as UserEntity } from '../models/user.entity';
import type { Express } from 'express';

declare global {
  namespace Express {
    interface User extends UserEntity {}
    interface Request {
      user?: UserEntity;
    }
  }
}
