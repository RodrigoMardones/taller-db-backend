import { Body, Controller, Get, Post } from 'routing-controllers';
import CreateSpecialityUseCase from '../../../domain/speciality/usecases/createspeciality.usecase';
import FindAllSpecialityUseCase from '../../../domain/speciality/usecases/findallspecialities.usecase';
import SpecialityDAL from '../../db/DAL/speciality.dal';

@Controller('/speciality')
export default class SpecialityController {
    @Post('/create')
    async createSpeciality(@Body() body: unknown): Promise<unknown> {
        return await new CreateSpecialityUseCase(new SpecialityDAL()).execute(body);
    }
    @Get()
    async findAll(): Promise<unknown> {
        return await new FindAllSpecialityUseCase(new SpecialityDAL()).execute();
    }
}