class AppError extends Error {
    public statusCode: number;

    constructor(statuscode: number, message: string, stack = '') {
        super(message); // throw new Error('someting went wrong')
        this.statusCode = statuscode;


        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default AppError;