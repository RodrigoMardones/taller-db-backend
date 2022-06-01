import { basicEntityAttributes } from '../../interfaces';

type statePayment = 'created' | 'paid' | 'refunded' | 'rejected';

export default interface ReceiptAttributes extends basicEntityAttributes {
  id?: number;
  id_medicalConsultation: number;
  id_paymentMethod: number;
  statePayment: statePayment;
  urlToReceipt: string;
  createdAt?: Date;
  updatedAt?: Date;
}
