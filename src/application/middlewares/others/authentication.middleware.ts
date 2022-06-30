import { Context } from 'koa';
import { KoaMiddlewareInterface } from 'routing-controllers';
import AuthSessionService from '../../services/session/session.service';
import dbProvider from '../../interfaces/providers/mongo';

export default class AuthorizationMiddleware implements KoaMiddlewareInterface {
    async use(context: Context, next: (err?: any) => Promise<any>): Promise<any> {
       const token = context.get('X-Session-Token');
       const service  = new AuthSessionService(dbProvider);
       const exist = await service.findWithHash(token);
       if(!exist){
            throw new Error('[AuthorizationMiddleware] session does not exist.');
       }
       const validateHash = service.verifyHash(token);
       if(!validateHash) {
           throw new Error('[AuthorizationMiddleware] invalid token.');
       }
       return next(context);
    }
}