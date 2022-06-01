import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import LicenseStateAttributes from '../../../domain/licenseState/models/licenseState.model';

export interface LicenseStateInput
  extends Optional<LicenseStateAttributes, 'id'> {}

export interface LicenseStatetOutout extends Required<LicenseStateAttributes> {}

class LicenseState
  extends Model<LicenseStateAttributes, LicenseState>
  implements LicenseStateAttributes
{
  id?: number | undefined;
  name!: string;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

LicenseState.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'LICENSE_STATE'
  }
);

export default LicenseState;
