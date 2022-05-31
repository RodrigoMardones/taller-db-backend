import { DAL,  UseCase } from "../../interfaces";
import ContactAttributes from "../models/contact.model";
export default class CreateContactUseCase implements UseCase<ContactAttributes,any>{
    constructor( private readonly contactDAL: DAL<ContactAttributes,any>){}
    async execute(data: ContactAttributes):Promise<any> {
        const created = await this.contactDAL.create(data);
        return created;
    }
}