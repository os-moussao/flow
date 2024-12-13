import { Job } from '../models/job.entity';
import { User } from '../models/user.entity';
import AppDataSource from './data-source';

export const userRepository = AppDataSource.getRepository(User);
export const jobRepository = AppDataSource.getRepository(Job);
