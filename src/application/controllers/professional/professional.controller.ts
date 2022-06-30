import { Body, Controller, HeaderParam, OnUndefined, Post } from "routing-controllers";
import CreateProfessionalUseCase from '../../../domain/professional/usecases/createprofessional.usecase';
import LoginProfessionalUseCase from "../../../domain/professional/usecases/loginprofessional.usecase";
import ProfessionalDAL from '../../db/DAL/professional.dal';
import AuthSessionService from "../../services/session/session.service";
import dbProvider from "../../interfaces/providers/mongo";
import LogoutProfessionalUseCase from "../../../domain/professional/usecases/logoutprofessional.usecase";

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
            new AuthSessionService(dbProvider),
            new ProfessionalDAL()
        ).execute(body);
    }
    @Post("/logout")
    @OnUndefined(204)
    async logout(@HeaderParam("X-Session-Token") token: string) {
        return new LogoutProfessionalUseCase(new AuthSessionService(dbProvider)).execute(
            token
        );
  }
}
export default ProfessionalController;
