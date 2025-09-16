import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status-codes';
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import User from "./user.model";


// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//     try {

//         //throw new error('Fake error')
//         // throw new AppError(httpStatus.BAD_REQUEST, 'Fake Error');

//         const user = await UserServices.createUser(req.body);

//         res.status(httpStatus.CREATED).json({
//             message: "User Created Successfully",
//             user
//         });
//     } catch (error: any) {
//         console.log(error);
//         next(error);
//     }
// };



const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body);

    // res.status(httpStatus.CREATED).json({
    //     message: "User Created Successfully",
    //     user
    // })

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        message: 'User Created Successfully',
        data: user,
        success: true,

    });
});

// get all users
const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserServices.getAllUsers();

    // res.status(httpStatus.OK).json({
    //     success: true,
    //     message: "All Users Retrieved Successfully",
    //     data: result.data
    // });

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        message: 'User Created Successfully',
        success: true,
        data: result.data,
        meta: result.meta

    });

});

export const UserController = {
    createUser,
    getAllUsers
};

// route matching ==> controller ==> serive ==> model ==> db

