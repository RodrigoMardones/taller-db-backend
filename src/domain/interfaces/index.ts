export interface UseCase<T,K> {
    execute(data:T): Promise<K> | K;
}