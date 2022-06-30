import {Auth} from "../../../domain/professional/models/auth.model";
import DataProvider from "../interfaces/dataProvider";
import jwt from "jsonwebtoken";

export default class AuthSessionService {
  private readonly collectionName: string = "sessions";
  constructor(private readonly dataProvider: DataProvider) {}
  async findOrCreate(key: string): Promise<Auth> {
    const res = await this.dataProvider
      .collection<Auth>(this.collectionName)
      .findOne({ key }, { projection: { _id: 0 } });
    if (!res) {
      const expiresIn = "7days";
      const newAuth: Auth = {
        key,
        expiresIn,
        lastconnection: new Date().toISOString(),
        token: this.generateHash(key, { expiresIn: expiresIn }),
      };
      return await this.create(newAuth);
    }
    return res;
  }
  async create(data: Auth): Promise<Auth> {
    const fixedAuth = { ...data };
    await this.dataProvider
      .collection<Auth>(this.collectionName)
      .insertOne({ ...fixedAuth });
    return fixedAuth;
  }
  generateHash(key: string, config: any): string {
    return jwt.sign({ key }, process.env.SECRET_KEY_JWT as string, {
      ...config,
    });
  }
  async isAuth(key: string): Promise<boolean> {
    const exist = await this.find(key);
    if (!exist) {
      return false;
    }
    const verifyToken = this.verifyHash(exist.token);
    if (!verifyToken) {
      return false;
    }
    return true;
  }
  verifyHash(hash: string): boolean {
    const res = jwt.verify(hash, process.env.SECRET_KEY_JWT as string);
    if (!res) {
      return false;
    }
    return true;
  }
  async destroy(key: string): Promise<void> {
    await this.dataProvider.collection(this.collectionName).deleteOne({ key });
  }
  async destroyWithHash(hash: string): Promise<void> {
    await this.dataProvider
      .collection(this.collectionName)
      .deleteOne({ token: hash });
  }
  async findWithHash(hash: string): Promise<Auth> {
    const res = await this.dataProvider
      .collection<Auth>(this.collectionName)
      .findOne({ token: hash });
    return res as Auth;
  }

  async find(key: string): Promise<Auth> {
    const res = await this.dataProvider
      .collection<Auth>(this.collectionName)
      .findOne({ key }, { projection: { _id: 0 } });
    return res as unknown as Auth;
  }
}
