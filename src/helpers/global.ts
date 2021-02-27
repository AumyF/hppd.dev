export {};

export const tap = Symbol("tap");
export const log = Symbol("log");
export const toNumber = Symbol("toNumber");

declare global {
  interface Object {
    /**
     * Print `this` and return it.
     */
    [log]<T>(this: T): T;

    /**
     * Apply `fn` to `this` and return `this`.  Usually `fn` has some side effects.
     */
    [tap]<T>(this: T, fn: (t: T) => unknown): T;
    [toNumber]<T = number>(onNaN?: (obj: this) => T): number | T;
  }
  interface ConvertableToNumber {
    [Symbol.toPrimitive](hint: "number"): number;
  }
  type UsableAsNumber = number | ConvertableToNumber;
}

Object.prototype[log] = function () {
  console.log(this);
  return this;
};

Object.prototype[tap] = function (f) {
  f(this);
  return this;
};

Object.prototype[toNumber] = function (onNaN) {
  const r = Number(this);
  if (onNaN && Number.isNaN(r)) return onNaN(this);
  return r;
};
