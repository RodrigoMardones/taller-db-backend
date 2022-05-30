import { Middleware, Ctx, KoaMiddlewareInterface } from "routing-controllers";
import { Context } from "koa";
import logger from 'koa-pino-logger';
import traceLogger from "../../interfaces/logger/logger";

@Middleware({type: 'before'})
export default class LoggerMiddleware implements KoaMiddlewareInterface{
    
    use(
        @Ctx() ctx: Context, 
        next: (err?: any) => Promise<any>
        ): Promise<any> {
         
        const middleware = logger({
            logger : traceLogger,
        });
        return middleware(ctx, next);
    }
}