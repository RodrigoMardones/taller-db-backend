import 'reflect-metadata';
import Server from './infraestructure/server';
import { controllers } from './application/controllers';
import { middlewares } from './application/middlewares';
import dbInit from './application/db';

const server = new Server({
  controllers,
  middlewares,
  classTransformer: true,
  defaultErrorHandler: false
});

const main = async () => {
  await dbInit();
  server.init();
};
main();
