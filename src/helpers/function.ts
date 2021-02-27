export const compose = Symbol("compose");
declare global {
  interface Function {
    [compose]<A extends readonly any[], T, R>(
      this: (...args: A) => T,
      f: (arg: T) => R
    ): (...args: A) => R;
  }
}

Function.prototype[compose] = function (f) {
  return (...args) => f(this(...args));
};
