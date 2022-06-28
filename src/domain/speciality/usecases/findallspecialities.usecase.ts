import { DAL, UseCase } from "../../interfaces";
import SpecialityAttributes from '../models/speciality.model';

export default class FindAllSpecialityUseCase implements UseCase<unknown, unknown> {
    constructor( private readonly specialityDAL: DAL<SpecialityAttributes, unknown> ) {}
    async execute(): Promise<unknown> {
        return await this.specialityDAL.findAll();
    }
    
}