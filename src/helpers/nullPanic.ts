export const panic = (e: { [i: string]: unknown }): never => {
  throw new AssertsNonNullError(e);
};

export class AssertsNonNullError extends TypeError {
  constructor(value: { [i: string]: unknown }) {
    const e = `A non-nullish value expected, but recieved ${value}`;
    super(e);
    this.name = new.target.name;
  }
}
