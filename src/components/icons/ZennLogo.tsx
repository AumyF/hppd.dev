import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

import { ClassName, WidthHeight } from "../../types/props";

export namespace ZennLogo {
  export interface Props extends ClassName, WidthHeight {}

  export const Presentation: React.FC<Props> = ({
    className,
    height,
    width,
  }) => (
    <svg
      {...{ height, width, className }}
      display="inline"
      viewBox="0 0 88.3 88.3"
      role="img"
      aria-label="Zenn"
    >
      <path
        fill="currentcolor"
        d="M2.4 83.3h17c.9 0 1.7-.5 2.2-1.2L68.4 5.2c.6-1-.1-2.2-1.3-2.2H51c-.8 0-1.5.4-1.9 1.1L1.6 81.9c-.3.6.1 1.4.8 1.4zM61 82.1l22.1-35.5c.7-1.1-.1-2.5-1.4-2.5h-16c-.6 0-1.2.3-1.5.8L41.5 81.2c-.6.9.1 2.1 1.2 2.1H59c.8 0 1.6-.4 2-1.2z"
      />
    </svg>
  );
  export const Styled = styled(Presentation)`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  `;
}
