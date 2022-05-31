import { Contact,User, Patient, MedicalInsurance } from "./models";
const isDev = process.env.NODE_ENV === 'development';

const dbInit = async () => {
    /**
     * sincronizar en orden de dependencias para no generar errores asociados
     */
    await Contact.sync({ force: true });
    await MedicalInsurance.sync({force: true});
    await User.sync({force: true});
    await Patient.sync({force: true});
};

export default dbInit;