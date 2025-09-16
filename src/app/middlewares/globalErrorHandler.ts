import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import AppError from "../errorHelpers/AppError";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    let statusCodes = 500;
    let message = `Something Went Wrong!!`;

    if (err instanceof AppError) { //err instanceof AppError --> if err comes from AppError
        statusCodes = err.statusCode;
        message = err.message;
    } else if (err instanceof Error) {
        statusCodes = 500;
        message = err.message;
    }

    res.status(statusCodes).json({
        success: false,
        message,
        err,
        stack: envVars.NODE_ENV === 'development' ? err.stack : null
    });
};