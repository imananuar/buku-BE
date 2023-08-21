import http from 'http';
import express, { Express } from 'express';

const router: Express = express();
const app = express();

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})