import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Job } from './job.entity';
import { RefreshToken } from './refresh-token.entity';

@Entity('users')
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
  @JoinColumn({ name: 'jobId' })
  job: Job;

  @Column({ nullable: true }) jobId: number;

  @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.user)
  refreshTokens: RefreshToken[];

  @CreateDateColumn() createdAt: Date;

  @DeleteDateColumn() deletedAt: Date;
}
