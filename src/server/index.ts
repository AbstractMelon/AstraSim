import express, { Express, Request, Response , Application } from 'express';

const app: Application = express();
const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from server!');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});