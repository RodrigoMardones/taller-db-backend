export interface Auth {
    key: string;
    token: string;
    lastconnection: string;
    expiresIn: number | string;
}

export interface LoginProfessionalAttributes {
    username: string;
    password: string;
}
