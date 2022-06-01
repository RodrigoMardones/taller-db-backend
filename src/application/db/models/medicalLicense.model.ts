import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from '../config';
import MedicalLicenseAttributes from "../../../domain/medicalLicense/models/medicalLicense.model";
import Professional from './professional.model';
import Patient from './patient.model';
import LicenseState from './licenseState.model';
import LicenseType from "./LicenseType.model";

export interface MedicalLicenseInput 
extends Optional<MedicalLicenseAttributes, 'id'> {};

export interface MedicalLicenseOutput
extends Required<MedicalLicenseAttributes> {};

class MedicalLicense extends Model<MedicalLicenseAttributes, MedicalLicenseInput>
implements MedicalLicenseAttributes {
    id?: number | undefined;
    id_professional!: number;
    id_patient!: number;
    id_state!: number;
    id_licenseType!: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

MedicalLicense.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_professional: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_patient: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_state: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_licenseType: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: "MEDICAL_LICENSE"
});

MedicalLicense.belongsTo(Professional, {
    foreignKey: 'id_professional',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
});

MedicalLicense.belongsTo(Patient, {
    foreignKey: 'id_patient',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
});

MedicalLicense.belongsTo(LicenseState, {
    foreignKey: 'id_state',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
});
MedicalLicense.belongsTo(LicenseType, {
    foreignKey: 'id_licenseType',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
});

export default MedicalLicense;