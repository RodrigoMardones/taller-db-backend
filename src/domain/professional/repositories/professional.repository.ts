import { DAL } from "../../interfaces";
import ProfessionalAttributes from "../models/professional.model";

export default interface
 IProfessionalRepository extends DAL<ProfessionalAttributes, unknown>
{
    validate(professional: ProfessionalAttributes, password: string): Promise<boolean> | boolean;
}