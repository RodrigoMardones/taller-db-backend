import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from '../config';
import PaymentMethodAttributes from "../../../domain/paymentMethod/models/paymentMethod.model";

export interface PaymentMethodInput 
extends Optional<PaymentMethodAttributes, 'id'> {};

export interface PaymentMethodOutput
extends Required<PaymentMethodAttributes> {};

class PaymentMethod extends Model<PaymentMethodAttributes, PaymentMethodInput>
implements PaymentMethodAttributes {
    id?: number | undefined;
    name!: string;
    description!: string;
    url!: string;
    image!: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

PaymentMethod.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type : DataTypes.STRING,
        allowNull: false
    },
    description : {
        type : DataTypes.STRING,
        allowNull: false
    },
    url: {
        type : DataTypes.STRING,
        allowNull: false
    },
    image: {
        type : DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps : true,
    sequelize : sequelizeConnection,
    modelName : 'PAYMENT_METHOD'
});

export default PaymentMethod;