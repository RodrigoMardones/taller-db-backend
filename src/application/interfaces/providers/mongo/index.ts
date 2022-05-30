import Mongo from "./mongoDB";

const dataBase = new Mongo(process.env.DATABASE_URI as string, {});

if (!Object.keys(dataBase.db).length) {
    dataBase.connection(process.env.DATABASE_NAME as string);
  }

export default dataBase;
