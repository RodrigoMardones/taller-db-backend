import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from '../config';
import MedicalInsuranceAttributes from '../../../domain/medicalInsurance/models/medicalInsurance.model';

export interface MedicalInsurnaceInput 
extends Optional<MedicalInsuranceAttributes, 'id'> {};

export interface MedicalInsuranceOutput
extends Required<MedicalInsuranceAttributes> {};

class MedicalInsurance extends Model<MedicalInsuranceAttributes, MedicalInsurnaceInput>
implements MedicalInsuranceAttributes {
    id?: number | undefined;
    name!: string;
    description!: string;
    image!: string;
    externalCode!: string;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;   
}

MedicalInsurance.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    externalCode: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'MEDICAL_INSURANCE'
});

export default MedicalInsurance;