import sequelizeConnection from "./config";
import { Umzug, SequelizeStorage} from "umzug";

export const migrator = new Umzug({
    migrations: {
        glob: ['migrations/*.ts', { cwd : __dirname}],
    },
    context: sequelizeConnection,
    storage: new SequelizeStorage({ sequelize: sequelizeConnection }),
    logger:  console
})
export type Migration = typeof migrator._types.migration;
