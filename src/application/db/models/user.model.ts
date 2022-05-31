import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from '../config';
import UserAttributes from '../../../domain/user/models/user.model';
import Contact from "./contact.model";
export interface UserInput extends Optional<UserAttributes, 'id' > {};
export interface UserOutput extends Required<UserAttributes> {};


class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    id?: number | undefined;
    dni!: string;
    names!: string;
    surnames!: string;
    birthdate!: Date;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

/**
 * User
 * declaracion de modelo en db
*/
User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    names: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surnames: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
},{
    timestamps: true,
    sequelize: sequelizeConnection,
    modelName: 'USER'
})

/**
 * 
 * relacion M:N =>> CONTACT_LIST
 */
User.belongsToMany(Contact,{
    through : 'CONTACT_LIST',
    as : 'CONTACTS',
    foreignKey: 'user_id'
});

Contact.belongsToMany(User,{
    through: 'CONTACT_LIST',
    as : 'USERS',
    foreignKey : 'contact_id'
})

export default User;