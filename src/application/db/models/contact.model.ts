import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import ContactAttributes from '../../../domain/contact/models/contact.model';

export interface ContactInput extends Optional<ContactAttributes, 'id'> {}
export interface ContactOutput extends Required<ContactAttributes> {}

class Contact
  extends Model<ContactAttributes, ContactInput>
  implements ContactAttributes
{
  public id!: number;
  public address!: string;
  public phone!: string;
  public email!: string;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

/**
 * Contacto
 * declaracion de modelo en db
 */
Contact.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'CONTACT'
  }
);

export default Contact;
