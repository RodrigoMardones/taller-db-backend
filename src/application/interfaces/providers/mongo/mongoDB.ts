import mongodb, { Collection, Db, Document, MongoClient } from 'mongodb';
import DataProvider from '../../../services/dataProviders/dataProvider';
import traceLogger from '../../logger/logger';
export default class MongoDB implements DataProvider {
  public client: MongoClient;
  public db: Db;
  constructor(url: string, options: mongodb.MongoClientOptions) {
    this.client = new MongoClient(url, { ...options, loggerLevel: 'error' });
    this.db = {} as Db;
  }

  async connection(name: string): Promise<void> {
    let tries = 3;
    while (tries > 0) {
      try {
        this.client = await this.client.connect();
        this.db = await this.client.db(name);
        traceLogger.info('connected to database');
        break;
      } catch (e) {
        tries = tries - 1;
        traceLogger.error('error trying to connect to database');
        if (tries === 0) throw e;
      }
    }
  }
  collection<T extends Document>(name: string): Collection<T> {
    return this.db.collection(name);
  }
}
