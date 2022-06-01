import { Collection, Document } from 'mongodb';

export default interface DataProvider {
  collection<T extends Document>(name: string): Collection<T>;
}
