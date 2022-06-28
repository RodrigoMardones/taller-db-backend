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
  MedicalLicense,
  MedicalCosultation,
  PaymentMethod,
  Receipt
} from './models';
const isDev = process.env.NODE_ENV === 'development';

const dbInit = async () => {
  /**
   * sincronizar en orden de dependencias para no generar errores asociados
   */
  await Contact.sync({ alter: isDev });
  await MedicalInsurance.sync({ alter: isDev });
  await Speciality.sync({ alter: isDev });
  await User.sync({ alter: isDev });
  await Patient.sync({ alter: isDev });
  await Professional.sync({ alter: isDev });
  await Block.sync({ alter: isDev });
  await Schedule.sync({ alter: isDev });
  await LicenseState.sync({ alter: isDev });
  await LicenseType.sync({ alter: isDev });
  await MedicalLicense.sync({ alter: isDev });
  await MedicalCosultation.sync({ alter: isDev });
  await PaymentMethod.sync({ alter: isDev });
  await Receipt.sync({ alter: isDev });
};

export default dbInit;
