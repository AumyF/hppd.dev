export const last = Symbol("last");
declare global {
  interface Array<T> {
    // [last](
    //   arr: Array<T>
    // ): this extends [...unknown[], infer Last] ? Last : T;
    [last](arr: Array<T>): T;
  }
}

Array.prototype[last] = function () {
  return this[this.length - 1];
};
