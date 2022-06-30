import { Professional } from "../models";
import { ProfessionalInput, ProfessionalOutput } from "../models/professional.model";
import Bcrypt from "bcrypt";
import IProfessionalRepository from '../../../domain/professional/repositories/professional.repository';

export default class ProfessionalDAL implements IProfessionalRepository{
    async findOne(params: Partial<ProfessionalInput>): Promise<ProfessionalOutput> {
       const result = await Professional.findOne({
        where : {
            ...params
        },
        // include : [User, Speciality]
       });
       return result?.toJSON() as ProfessionalOutput;
    }
    async encrypt(message: string): Promise<string> {
      return await Bcrypt.hash(message, Number(process.env.SALT_CRYPT_CODE));
    }
    findAll(): Promise<ProfessionalOutput[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<ProfessionalOutput> {
        throw new Error("Method not implemented.");
    }
    async create(professionalAttrs : ProfessionalInput): Promise<ProfessionalOutput> {
        const { password, ...rest } = professionalAttrs;
        const professional = await Professional.create({
            ...rest,
            password : await this.encrypt(password),
        }, { raw: true });
        return professional.get() as ProfessionalOutput;
    }
    async validate(professionalAttrs: ProfessionalInput, password: string): Promise<boolean> {
        return await Bcrypt.compare(password, professionalAttrs.password); 
    }
}