import { Express } from 'express';
import expressLoader from './express.loader';
import dbLoader from './db.loader';

async function loader(app: Express) {
  await dbLoader();
  console.log('Database connected...');

  expressLoader(app);
  console.log('Express app loaded...');
}

export default loader;
