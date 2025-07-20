import express from 'express';
import pagesRoute from './routes/route.js';
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', pagesRoute);

const startServer = () => {
    const PORT = process.env.PORT || 3000;
    try {
        app.listen(PORT, () => {
            console.info('Server listening on port', { port: PORT })
        })
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

startServer();