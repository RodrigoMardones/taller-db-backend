import { basicEntityAttributes } from '../../interfaces';

export default interface PaymentMethodAttributes extends basicEntityAttributes {
  id?: number;
  name: string;
  description: string;
  url: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}
