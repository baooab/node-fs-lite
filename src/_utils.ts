export function toAsync<T extends (...args: any[]) => unknown>(method: T) {
  return async function asyncMethod(...args: Parameters<T>): Promise<ReturnType<T>> {
    return method.apply(this, args)
  }
}
