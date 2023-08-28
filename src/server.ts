import http from 'http';
import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import routes from './routes/userRoute';

dotenv.config();

const app: Express = express();

/** CORS */
const cors = require('cors');
app.use(cors({
    origin: process.env.FRONTEND_HOST,
    methods: ['GET', 'DELETE', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

/** Routes */
app.use('/api', routes);

/** Error */
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server Listener */
const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 8080;
httpServer.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})