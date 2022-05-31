import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from '../config';
import SpecialityAttributes from "../../../domain/speciality/models/speciality.model";

export interface SpecialityInput
extends Optional <SpecialityAttributes, 'id'> {};

export interface SpecialityOutput
extends Required <SpecialityAttributes> {};

class Speciality extends Model<SpecialityAttributes, SpecialityInput>
implements SpecialityAttributes {
    id?: number;
    name!: string;
    value!: number;
    currency!: number;
    updatedAt?: Date;
    createdAt?: Date;
}

Speciality.init({
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type : DataTypes.STRING,
        allowNull: false
    },
    currency : {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName : 'SPECIALITY'
});

export default Speciality;