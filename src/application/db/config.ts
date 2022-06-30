import fs from 'fs';
import { Sequelize, Options } from 'sequelize';

const connectionUri = process.env.DB_CONNECTION_URI as string;

const sequelizeConnection = new Sequelize(connectionUri, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      ca: fs.readFileSync(`${process.cwd()}/ca-certificate.crt`).toString()
    }
  }
} as Options);
const testConnection = async (sequelize: Sequelize): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
testConnection(sequelizeConnection);
export default sequelizeConnection;
