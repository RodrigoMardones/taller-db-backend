export interface DAL<T, K> {
  create(payload: T): Promise<K>;
  getById(id: number): Promise<K>;
  findAll(params?: unknown): Promise<K[]>;
  findOne(params: unknown): Promise<K>;
}
export interface UseCase<T, K> {
  execute(data?: T): Promise<K> | K;
}

export interface basicEntityAttributes {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
