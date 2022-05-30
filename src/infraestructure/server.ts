import { createKoaServer, RoutingControllersOptions } from 'routing-controllers';
import Koa from 'koa';
import traceLogger from '../application/interfaces/logger/logger';
export default class Server {
    readonly app: Koa;
    constructor(config: RoutingControllersOptions){
        this.app = createKoaServer(config);
    }
    public async init(): Promise<void> {
        const port: number = parseInt(String(process.env.PORT), 10) || 8082;   
        this.app.listen(port, () => {
            traceLogger.info(`server running on port => [${port}] 😀`);
        });
        this.app.on('error', (e: Error) => {
            traceLogger.info(e.message);
        })
    }
}