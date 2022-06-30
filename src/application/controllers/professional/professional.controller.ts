import { Body, Controller, OnUndefined, Post } from "routing-controllers";
import CreateProfessionalUseCase from '../../../domain/professional/usecases/createprofessional.usecase';
import LoginProfessionalUseCase from "../../../domain/professional/usecases/loginprofessional.usecase";
import ProfessionalDAL from '../../db/DAL/professional.dal';
import AuthSessionService from "../../services/session/session.service";
import dataProvider from "../../interfaces/providers/mongo";

@Controller('/professional')
class ProfessionalController {
    @Post('/create')
    async createProfessional(@Body() body: unknown): Promise<unknown> {
        return await new CreateProfessionalUseCase(
            new ProfessionalDAL(),
            ).execute(body);
    }
    @Post('/login')
    async loginProfessional(@Body() body: unknown): Promise<unknown>{
        return await new LoginProfessionalUseCase(
            new AuthSessionService(dataProvider),
            new ProfessionalDAL()
        ).execute(body);
    }
}
export default ProfessionalController;
