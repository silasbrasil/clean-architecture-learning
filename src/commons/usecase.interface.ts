export interface UseCase<E, R> {
  execute(props: E): Promise<R>;
}
