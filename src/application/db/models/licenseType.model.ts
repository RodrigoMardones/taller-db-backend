import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import LicenseTypeAttributes from '../../../domain/LicenseType/models/licenseType.model';

export interface LicenseTypeInput
  extends Optional<LicenseTypeAttributes, 'id'> {}

export interface LicenseTypetOutout extends Required<LicenseTypeAttributes> {}

class LicenseType
  extends Model<LicenseTypeAttributes, LicenseTypeInput>
  implements LicenseTypeAttributes
{
  id?: number | undefined;
  name!: string;
  externalCode!: number;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

LicenseType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    externalCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'LYCENSE_TYPE'
  }
);

export default LicenseType;
