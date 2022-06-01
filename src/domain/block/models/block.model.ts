import { basicEntityAttributes } from '../../interfaces';

export default interface BlockAttributes extends basicEntityAttributes {
  id?: number;
  startTime: string;
  finishTime: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}
