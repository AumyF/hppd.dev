export type ClassName = { className?: string };

export type WidthHeight = {
  height?: "auto" | "max-content" | "min-content" | (string & {});
  width?: "auto" | "max-content" | "min-content" | (string & {});
};
