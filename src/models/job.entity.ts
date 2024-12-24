import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from '../types/permissions';
import { User } from './user.entity';

@Entity({ name: 'jobs' })
export class Job {
  @PrimaryGeneratedColumn() id: number;

  @Column() title: string;

  @Column({ nullable: true }) description: string;

  @Column({ type: 'jsonb', default: [] }) permissions: Permission[];

  @OneToMany(() => User, (user) => user.job) users: User[];
}
