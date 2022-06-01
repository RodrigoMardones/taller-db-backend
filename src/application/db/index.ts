import { 
    Contact,
    User, 
    Patient, 
    MedicalInsurance, 
    Professional,
    Speciality,
    Block,
    Schedule,
    LicenseState,
    LicenseType,
    MedicalLicense
} from "./models";
const isDev = process.env.NODE_ENV === 'development';

const dbInit = async () => {
    /**
     * sincronizar en orden de dependencias para no generar errores asociados
     */
    await Contact.sync({ force: true });
    await MedicalInsurance.sync({force: true});
    await Speciality.sync({force : true });
    await User.sync({force: true});
    await Patient.sync({force: true});
    await Professional.sync({force: true});
    await Block.sync({ force: true });
    await Schedule.sync({ force: true });
    await LicenseState.sync({force: true});
    await LicenseType.sync({force: true});
    await MedicalLicense.sync({force: true});
};

export default dbInit;