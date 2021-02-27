import { css } from "@emotion/react";
import React from "react";

import { margin } from "../../styles/layout";
import { mediaQuery } from "../../styles/screen";

export const Avatar: React.FC = () => (
  <img
    src="/icon.png"
    css={css`
      height: 12rem;
      ${margin.x("auto")}
      ${mediaQuery("sm")} {
        ${margin.x("0")}
      }
    `}
    alt="avatar of aumy"
  />
);
