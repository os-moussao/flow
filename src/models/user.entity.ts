import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Job } from './job.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 25 }) firstName: string;
  @Column({ length: 25 }) lastName: string;
  @Column({ unique: true }) googleId: string;
  @Column({ unique: true }) email: string;
  @Column({ nullable: true }) phone: string;
  @Column({ default: false }) isAdmin: boolean;
  @ManyToOne(() => Job, (job) => job.users, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  job: Job;
  @Column({ nullable: true }) jobId: number;
  @CreateDateColumn() createdAt: Date;
  @DeleteDateColumn() deletedAt: Date;
}
