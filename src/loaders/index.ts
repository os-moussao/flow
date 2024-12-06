import { Express } from 'express';
import expressLoader from './express.loader';

async function loader(app: Express) {
  expressLoader(app);
  console.log('Express app loaded...');
}

export default loader;
