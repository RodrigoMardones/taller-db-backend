import { DAL, UseCase } from '../../interfaces/index';
import UserAttributes from '../models/user.model';

export default class CreateUserUseCase implements UseCase<unknown, unknown> {
    constructor( private readonly userDAL : DAL<UserAttributes, unknown>) {}
    async execute(data: unknown): Promise<unknown> {
        const d = data as UserAttributes;
        const createdUser = await this.userDAL.create(d);
        return createdUser;
    }   
}