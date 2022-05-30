import { Context } from "koa";
import { Ctx, Middleware } from "routing-controllers";
import { parseError } from "./utils";
import { v4 as uuidv4 } from 'uuid';
import traceLogger from "../../interfaces/logger/logger";

@Middleware({type: 'before'})
export default class ErrorMiddleware {
    public async use(
        @Ctx() context: Context,
        next: (err?: Error) => Promise<Error>
    ): Promise<void> {
        try {
            await next();
        } catch(error: unknown) {

            const parsedErr = parseError(error);
            const traceID = uuidv4();
            traceLogger.info({
                errorName: parsedErr.name,
                code: context.response.status || 500,
                traceID
            })
            context.status = 400;
            context.body = {
                message: parsedErr.name,
                traceID
            }
        }
    }
}