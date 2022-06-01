import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import ReceiptAttributes from '../../../domain/receipt/models/receipt.model';
import MedicalCosultation from './medicalConsultation.model';
import PaymentMethod from './paymentMethod.model';

export interface ReceiptInput extends Optional<ReceiptAttributes, 'id'> {}

export interface ReceiptOutput extends Required<ReceiptAttributes> {}

class Receipt
  extends Model<ReceiptAttributes, ReceiptOutput>
  implements ReceiptAttributes
{
  id?: number | undefined;
  id_medicalConsultation!: number;
  id_paymentMethod!: number;
  statePayment!: 'created' | 'paid' | 'refunded' | 'rejected';
  urlToReceipt!: string;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

Receipt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_medicalConsultation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_paymentMethod: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    statePayment: {
      type: DataTypes.STRING,
      defaultValue: 'created',
      allowNull: false
    },
    urlToReceipt: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'RECEIPT'
  }
);

Receipt.belongsTo(MedicalCosultation, {
  foreignKey: 'id_medicalConsultation',
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
});
Receipt.belongsTo(PaymentMethod, {
  foreignKey: 'id_paymentMethod',
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
});

export default Receipt;
