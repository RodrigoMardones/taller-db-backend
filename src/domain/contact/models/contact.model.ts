export default interface ContactAttributes {
    id?: number;
    address: string;
    phone: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}