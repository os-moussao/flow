import { Express } from 'express';
import expressLoader from './express.loader';
import dbLoader from './db.loader';
import { loadSwaggerDocs } from './docs.loader';

async function loader(app: Express) {
  await dbLoader();
  console.log('Database connected...');

  loadSwaggerDocs(app);
  console.log('Swagger docs loaded...');

  expressLoader(app);
  console.log('Express app loaded...');
}

export default loader;
