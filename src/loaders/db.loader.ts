import AppDataSource from '../db/data-source';

const dbLoader = async () => {
  try {
    await AppDataSource.initialize();
  } catch (err) {
    console.log('Fail to initialize AppDataSource\n', err);
    process.exit(1);
  }
};

export default dbLoader;
