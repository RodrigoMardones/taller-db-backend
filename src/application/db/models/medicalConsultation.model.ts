import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import MedicalConsultationAttributes from '../../../domain/medicalConsultation/models/medicalConsultation.model';
import Patient from './patient.model';
import Schedule from './schedule.model';

export interface MedicalConsultationInput
  extends Optional<MedicalConsultationAttributes, 'id'> {}

export interface ReceiptOutput
  extends Required<MedicalConsultationAttributes> {}

class MedicalCosultation
  extends Model<MedicalConsultationAttributes, MedicalConsultationInput>
  implements MedicalConsultationAttributes
{
  id?: number | undefined;
  id_patient!: number;
  id_schedule!: number;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

MedicalCosultation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_patient: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_schedule: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'MEDICAL_CONSULTATION'
  }
);

MedicalCosultation.belongsTo(Patient, {
  foreignKey: 'id_patient',
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
});

MedicalCosultation.belongsTo(Schedule, {
  foreignKey: 'id_schedule',
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
});

export default MedicalCosultation;
