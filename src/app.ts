import express, { Request, Response } from "express";
import cors from 'cors';
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import httpStatus from 'http-status-codes';
import notFound from "./app/middlewares/notFound";

const app = express();

// send json data in body --- also need to call
app.use(express.json());

// prevent api cors error
app.use(cors());

// it will rediret in user Routes '/register'
app.use('/api/v1', router);



app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: `Welcome to Tour Management System Backend`
    });
});

//controller function
app.use(globalErrorHandler);
app.use(notFound);

export default app;