import { css } from "@emotion/react";

import { borderBox } from "../styles/layout";
import { mediaQuery } from "../styles/screen";
import { family, featureSettings, webFont } from "../styles/text";
import { variables } from "../styles/variables";

export const Globals = [
  variables,
  css`
    *,
    *::before,
    *::after {
      ${borderBox}
      margin: 0;
    }
    html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 20px;
      word-spacing: 1px;
      box-sizing: border-box;
      scroll-behavior: smooth;
      scrollbar-color: hsl(0, 0%, 97.5%) hsl(0, 0%, 20%);
      line-height: 1.5;
      ${family.sans}
      ${featureSettings}
    }
  `,
  css`
    ul {
      list-style-type: disc;
      padding-left: 1rem;
    }
    h2 {
      font-weight: 700;
      font-size: 1.875rem;
      margin-bottom: 0.5rem;
      display: flex;
      flex-direction: column;
      &::after {
        border-bottom-width: 1px;
        border-bottom-color: var(--color-border);
        border-bottom-style: solid;
        height: 0;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 0rem;
        flex-grow: 1;
        content: "";
      }
    }
    ${mediaQuery("sm")} {
      h2 {
        font-weight: 700;
        font-size: 1.875rem;
        margin-bottom: 0.5rem;
        display: flex;
        flex-direction: row;
        &::after {
          border-bottom-width: 1px;
          border-bottom-color: var(--color-border);
          border-bottom-style: solid;
          height: 0;
          margin-top: auto;
          margin-bottom: auto;
          margin-left: 1rem;
          flex-grow: 1;
          content: "";
        }
      }
    }
    h3 {
      font-weight: bold;
      font-size: 1.25rem;
    }
    a {
      color: var(--accent);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      margin-bottom: 1rem;
      line-height: 1.75;
      text-align: justify;
      text-justify: inter-character;
      letter-spacing: 0.075em;
    }
    .ion {
      fill: currentColor;
      margin-bottom: auto;
      margin-top: auto;
    }
    ion-icon.chevron {
      margin-left: auto;
      margin-right: auto;
    }
  `,
  webFont,
];
