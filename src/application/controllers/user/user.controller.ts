import { Body, Controller, Get, HttpCode, Post } from 'routing-controllers';
import CreateUserUseCase from '../../../domain/user/usecases/createuser.usecase';
import UserDAL from '../../db/DAL/user.dal';

const jsonTest = {
    message: 'test'
}

@Controller('/user')
export default class UserController {
    @Post('/create')
    async create(@Body() data: unknown): Promise<unknown> {
        return await new CreateUserUseCase(new UserDAL()).execute(data);
    }

    @Get('/test')
    @HttpCode(200)
    async testController() {
        console.log('test');
        return jsonTest;
    }
}