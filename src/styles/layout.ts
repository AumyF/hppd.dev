import { css } from "@emotion/react";

export const borderBox = css`
  box-sizing: border-box;
`;

export const contentBox = css`
  box-sizing: content-box;
`;

type MarginValue = "auto" | (string & {});

export const margin = {
  x(value: MarginValue) {
    return css`
      margin-left: ${value};
      margin-right: ${value};
    `;
  },
  y(value: MarginValue) {
    return css`
      margin-top: ${value};
      margin-bottom: ${value};
    `;
  },
} as const;

type PaddingValue = string & {};

export const padding = {
  x(value: PaddingValue) {
    return css`
      padding-left: ${value};
      padding-right: ${value};
    `;
  },
  y(value: PaddingValue) {
    return css`
      padding-top: ${value};
      padding-bottom: ${value};
    `;
  },
} as const;

export const container = css`
  width: 100%;
  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;
