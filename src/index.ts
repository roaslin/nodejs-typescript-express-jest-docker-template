import cors from 'cors';
import express, { Express, NextFunction } from 'express';

const app: Express = express();

app.use(cors()).use(express.json()).options('*', cors());

app.post('/hello', async () => {
    return 'hello world';
});

// ports
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const port = PORT || 3111;
const host = HOST || 'localhost';

app.listen(port, () => {
    console.log(`[server]: Server is running at http://${host}:${port}`);
});

export default app;
