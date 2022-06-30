import { DAL } from "../../../domain/interfaces";
import { Schedule } from "../models";
import { ScheduleInput, ScheduleOutput } from '../models/schedule.model';

export default class ScheduleDAL implements DAL<ScheduleInput, ScheduleOutput>{
    async create(scheduleAttrs: ScheduleInput): Promise<ScheduleOutput> {
        const ScheduleCreated = await Schedule.create(scheduleAttrs);
        return ScheduleCreated.toJSON() as ScheduleOutput;
    }
    getById(id: number): Promise<ScheduleOutput> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<ScheduleOutput[]> {
        throw new Error("Method not implemented.");
    }
    async findOne(params: Partial<ScheduleInput>): Promise<ScheduleOutput> {
        const result = await Schedule.findOne({
            where: {
                ...params,
            }
        });
        return result?.toJSON() as ScheduleOutput;
    }
}