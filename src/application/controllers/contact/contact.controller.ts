import { Body, Controller, Post } from 'routing-controllers';
import CreateContactUseCase from '../../../domain/contact/usecases/contact.usecase';
import ContactDAL from '../../db/DAL/contact.dal';

@Controller('/contact')
export default class ContactController {
  @Post('/create')
  async createContact(@Body() body: any) {
    return new CreateContactUseCase(new ContactDAL()).execute(body);
  }
}
