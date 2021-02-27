import { SetFieldsOnGraphQLNodeTypeArgs } from "gatsby";
import { render } from "react-dom";

import { compose } from "./function";

export const truncate = Symbol("truncate");

type empty = `${""}${""}` extends `${infer F}${infer Rest}` ? [F, Rest] : never;

type ToArray<
  S extends string,
  S0 extends string[] = []
> = S extends `${infer F}${infer R}`
  ? R extends ""
    ? [...S0, F]
    : ToArray<R, [...S0, F]>
  : never;

type Trunc<
  A extends Array<string>,
  L extends number,
  F0 extends Array<string> = []
> = A extends [infer F, ...infer Rest]
  ? Rest extends string[]
    ? F extends string
      ? [...F0, F] extends { length: L }
        ? [...F0, F]
        : Trunc<Rest, L, [...F0, F]>
      : Unreachable
    : Unreachable
  : [...F0];

type Truncate<
  S extends string,
  L extends number,
  F0 extends string = ""
> = S extends `${infer First}${infer Rest}`
  ? ToArray<`${F0}${First}`> extends { length: L }
    ? `${F0}${First}`
    : Truncate<Rest, L, `${F0}${First}`>
  : F0;

type st = Truncate<"foobar", 8>;

type Unreachable = never;
type Join<A extends Array<string>, S extends string = ""> = A extends [
  infer F,
  ...infer Rest
]
  ? F extends string
    ? Rest extends string[]
      ? Rest extends [string]
        ? `${S}${F}${Rest[0]}`
        : Join<Rest, `${S}${F}`>
      : Unreachable
    : Unreachable
  : never;

type j = Join<["2", "8", "2"]>;

type StringTruncate<S extends string, L extends number> = Join<
  Trunc<ToArray<S>, L>
>;

export const constructDate = Symbol("constructDate");
export const last = Symbol("last");
export const removeLastMatched = Symbol("removeLastThen");
export const map = Symbol("map");

declare global {
  interface String {
    [constructDate](): Date;

    // TODO: 型パズル
    /**
     * Returns last charactor of string.
     */
    [last](): string;

    [map](f: (str: string) => string): string;

    // TODO: 型パズル
    /**
     * Returns new string.
     */
    [removeLastMatched](char: string): string;
    [truncate]<S extends string, L extends number>(
      this: S,
      length: L
    ): string extends S ? string : Truncate<S, L>;
  }
}

String.prototype[constructDate] = function () {
  return new Date(this.valueOf());
};

String.prototype[truncate] = function (length) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return this.substring(0, length) as any;
};

String.prototype[last] = function () {
  return this[this.length - 1];
};

String.prototype[removeLastMatched] = function (char) {
  if (this[last]() === char) {
    return this.substring(0, this.length - 1);
  }
  return this.valueOf();
};

String.prototype[map] = Array.prototype.map.call[compose]((v: string[]) =>
  v.join("")
);
Array.prototype.join.apply;
