export const optional = <T extends object>(obj: T): T => {
  const handler = {
    get: (target: T, p: PropertyKey): any => {
      if (!(<any>target)[p]) {
        return {};
      }
      return Reflect.get(target, p);
    }
  };
  return new Proxy(obj, handler);
};
