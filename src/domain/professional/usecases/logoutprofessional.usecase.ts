import { UseCase } from "../../interfaces";
import ISessionRepository from "../repositories/session.repository";

export default class LogoutProfessionalUseCase implements UseCase<unknown, unknown> {
    constructor(private readonly repository: ISessionRepository) {}
    async execute(data: string): Promise<unknown> {
        const existAuth = await this.repository.findWithHash(data);
        if (!existAuth) {
          return;
        }
        return await this.repository.destroy(existAuth.key);
      }
    
}