import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from '../config';
import ProfessionalAttributes from '../../../domain/professional/models/professional.model';
import User from "./user.model";
import Speciality from './speciality.model';

export interface ProfessionalInput
extends Optional<ProfessionalAttributes, 'id'> {};

export interface ProfessionalOutput
extends Required<ProfessionalAttributes> {};

class Professional extends Model<ProfessionalAttributes, ProfessionalInput>
implements ProfessionalAttributes {
    id?: number | undefined;
    id_speciality!: number;
    id_user!: number;
    username!: string;
    password!: string;
    linkToConsultation!: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
Professional.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_speciality : {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linkToConsultation : {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps : true,
    sequelize: sequelizeConnection,
    modelName : 'PROFESSIONAL'
});


Professional.belongsTo(User, {
    foreignKey : 'id_user',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

Professional.belongsTo(Speciality, {
    foreignKey : 'id_speciality',
    onUpdate: 'CASCADE',
});

export default Professional;