export const optional = <T extends object>(obj: T): T => {
  const isEmpty = (target: T): boolean => {
    if (Array.isArray(target) && target.length === 0) {
      return true;
    }
    return Object.keys(target).length === 0;
  };
  const handler = {
    get: (target: T, p: PropertyKey): any => {
      if (!(<any>target)[p]) {
        if (isEmpty(target)) return undefined;
        return {};
      }
      return Reflect.get(target, p);
    }
  };
  return new Proxy(obj, handler);
};
