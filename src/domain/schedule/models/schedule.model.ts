import { basicEntityAttributes } from "../../interfaces";

export default interface ScheduleAttributes extends basicEntityAttributes{
    id?: number;
    id_professional: number;
    id_block: number;
    currentDate: string;
    createdAt?: Date;
    updatedAt?: Date;
}