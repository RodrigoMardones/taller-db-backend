import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from '../config';
import ScheduleAttributes from "../../../domain/schedule/models/schedule.model";
import Professional from "./professional.model";
import Block from './block.model';

export interface ScheduleInput
extends Optional<ScheduleAttributes, 'id'> {};

export interface ScheduleOutput
extends Required<ScheduleAttributes> {};

class Schedule extends Model<ScheduleAttributes, ScheduleInput>
implements ScheduleAttributes {
    id?: number | undefined;
    id_professional!: number;
    id_block!: number;
    currentDate!: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

Schedule.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_professional : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_block: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    currentDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'SCHEDULE'
});

Schedule.belongsTo(Professional, {
    foreignKey: 'id_professional',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Schedule.belongsTo(Block, {
    foreignKey: 'id_block',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});

export default Schedule;