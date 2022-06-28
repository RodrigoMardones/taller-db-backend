import { Body, Controller, OnUndefined, Post } from "routing-controllers";
import CreateProfessionalUseCase from '../../../domain/professional/usecases/createprofessional.usecase';
import ProfessionalDAL from '../../db/DAL/professional.dal';

@Controller('/professional')
class ProfessionalController {
    @Post('/create')
    async createProfessional(@Body() body: unknown): Promise<unknown> {
        return await new CreateProfessionalUseCase(
            new ProfessionalDAL(),
            ).execute(body);
    }
    @Post('/login')
    @OnUndefined(200)
    async loginProfessional(): Promise<unknown>{
        return {};
    }
}
export default ProfessionalController;
