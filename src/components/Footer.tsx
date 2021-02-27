import { css } from "@emotion/react";
import React from "react";

import { container, margin } from "../styles/layout";

export namespace Footer {
  export const Presentation: React.FC = () => {
    return (
      <footer
        css={css`
          ${margin.x("auto")}
          padding: 0 1rem 1rem;
          text-align: center;
          ${container}
        `}
      >
        <small>&copy; 2021 Aumy</small>
      </footer>
    );
  };
}
