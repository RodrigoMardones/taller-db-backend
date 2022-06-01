import { Sequelize, Options } from 'sequelize/types';
import traceLogger from '../../logger/logger';

export default class PostgresProvider {
  public client: Sequelize;
  constructor(options: Options) {
    this.client = new Sequelize({
      ...options,
      database: '',
      dialect: 'postgres',
      username: '',
      password: '',
      logging: (...msg) => traceLogger.info(msg)
    });
  }
  async connnection(): Promise<void> {
    let tries = 3;
    while (tries > 0) {
      try {
        await this.client.authenticate();
      } catch (e) {
        tries = tries - 1;
        traceLogger.error('error trying to connect with database');
        if (tries === 0) throw e;
      }
    }
  }
}
