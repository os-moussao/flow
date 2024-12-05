import { Express, Request, Response } from 'express';

export async function loader(app: Express) {
  app.use((req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello World !' });
  });
}
