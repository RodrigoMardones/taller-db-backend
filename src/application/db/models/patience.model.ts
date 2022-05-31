import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from '../config';
import PatientAttributes from '../../../domain/patient/models/patient.model';
import User from "./user.model";


export interface PatientInput 
extends Optional<PatientAttributes, 'id'> {};

export interface PatientOutout 
extends Required<PatientAttributes> {};

class Patient extends Model<PatientAttributes, PatientInput> implements PatientAttributes {
    id?: number | undefined;
    id_user!: number | undefined;
    id_prevision!:number;
    dni_employee!: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

Patient.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_prevision: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dni_employee : {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

/** */
Patient.belongsTo(User, {
    foreignKey: 'id_user',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

export default Patient;