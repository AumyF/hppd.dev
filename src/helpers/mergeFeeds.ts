import { toNumber } from "./global";
import { constructDate } from "./string";

export type NodeItem = {
  contentSnippet: string;
  isoDate: string;
  link: string;
  title: string;
};

export const mergeFeeds = (
  sources: {
    readonly [_ in "Blog" | "Zenn"]: readonly {
      readonly node: Readonly<Partial<NodeItem>>;
    }[];
  }
): NodeItem[] => {
  const {
    Blog,
    Zenn,
  }: {
    readonly [_ in "Zenn" | "Blog"]: readonly NodeItem[];
  } = Object.fromEntries(
    Object.entries(sources).map(([k, edges]) => [
      [k],
      edges.map(({ node }) => node),
    ])
  );

  return Zenn.concat(Blog)
    .sort((a, b) => extractIsoDate(b) - extractIsoDate(a))
    .slice(0, 10);
};

const extractIsoDate = ({ isoDate }: NodeItem) =>
  isoDate[constructDate]()[toNumber]();
