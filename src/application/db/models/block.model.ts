import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import BlockAttributes from '../../../domain/block/models/block.model';

export interface BlockInput extends Optional<BlockAttributes, 'id'> {}

export interface BlockOutput extends Required<BlockAttributes> {}

class Block
  extends Model<BlockAttributes, BlockInput>
  implements BlockAttributes
{
  id?: number | undefined;
  startTime!: string;
  finishTime!: string;
  description!: string;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

Block.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    finishTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'block'
  }
);

export default Block;
