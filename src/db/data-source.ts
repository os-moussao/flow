import { DataSource } from 'typeorm';
import config from '../config';

const AppDataSource = new DataSource({
  type: 'postgres',
  entities: ['dist/**/*.entity.js', 'src/**/*.entity.ts'],
  migrations: ['dist/db/migrations/*.js'],
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.password,
  database: config.database.dbName,
});

export default AppDataSource;
