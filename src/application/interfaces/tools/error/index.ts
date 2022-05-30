import { HttpError } from "routing-controllers";

export class NotFoundError extends HttpError {
    constructor(message: string){
        super(404, message);
    }
}

export class NotAuthorizedError extends HttpError {
    constructor(message: string){
        super(401, message);
    }
}
