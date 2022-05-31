import { Contact,User, Patient } from "./models";
const isDev = process.env.NODE_ENV === 'development';

const dbInit = async () => {
    await User.sync({force: true});
    await Patient.sync({force: true});
    await Contact.sync({ force: true });
};

export default dbInit;