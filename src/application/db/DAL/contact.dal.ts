import { DAL } from '../../../domain/interfaces';
import { Contact } from '../models';
import { ContactInput, ContactOutput } from '../models/contact.model';

class ContactDAL implements DAL<ContactInput, ContactOutput> {
  findAll(): Promise<ContactOutput[]> {
    throw new Error('Method not implemented.');
  }
  async create(payload: ContactInput): Promise<ContactOutput> {
    const contact = await Contact.create(payload, { raw: true });
    return contact.get() as ContactOutput;
  }
  async getById(id: number): Promise<ContactOutput> {
    const contact = await Contact.findByPk(id);
    if (!contact) {
      throw new Error('Contact Not Found');
    }
    return contact.get() as ContactOutput;
  }
}
export default ContactDAL;
