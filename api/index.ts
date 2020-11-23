import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
// Routes import
import example from './routes/example.routes';

// env config
dotenv.config();

// Init app
const app = express();

// Express config
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// CORS
app.use(cors());

// DBConnection
// DBConnection(); from ./database

// Routes
app.use('/api/routes', example);

// Init server
app.listen(process.env.PORT, () => {
    try {
        return console.log(`Server on port ${process.env.PORT}`);
    } catch (error) {
        return console.log(error);
    }
});