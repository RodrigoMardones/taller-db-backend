import { Auth } from "../models/auth.model";

export default interface ISessionRepository {
    find(key: string): Promise<Auth>;
    create(data: Auth): Promise<Auth>;
    isAuth(key: string): Promise<boolean>;
    destroy(key: string): Promise<void>;
    destroyWithHash(hash: string): Promise<void>;
    generateHash(key: string, config: any): string;
    verifyHash(hash: string): boolean;
    findWithHash(hash: string): Promise<Auth>;
    findOrCreate(key: string): Promise<Auth>;
  }
  