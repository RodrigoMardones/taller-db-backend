import { UserInput, UserOutput } from '../models/user.model';
import { User } from '../models';
import { DAL } from '../../../domain/interfaces';

export default class UserDAL implements DAL<UserInput, UserOutput>{
    findOne(params: unknown): Promise<UserOutput> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<UserOutput[]> {
        throw new Error('Method not implemented.');
    }
    async getById(id: number): Promise<UserOutput> {
        const user = await User.findByPk(id, {raw : true});
        return user?.get() as UserOutput;
    }
    async create(professionalAttrs : UserInput): Promise<UserOutput> {
        const user = await User.create(professionalAttrs, { raw: true });
        return user.get() as UserOutput;
    }
} 