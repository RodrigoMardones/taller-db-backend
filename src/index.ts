import 'reflect-metadata';
import Server from './infraestructure/server';
import {controllers} from './application/controllers';
import { middlewares } from './application/middlewares';
const server = new Server({
    controllers,
    middlewares,
    classTransformer: true,
    defaultErrorHandler: false
});
server.init();