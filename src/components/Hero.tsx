import { css } from "@emotion/react";
import React from "react";

import { container, margin } from "../styles/layout";
import { breakpointNames, breakpoints, mediaQuery } from "../styles/screen";
import { Avatar } from "./Hero/Avatar";
import { RichLink } from "./RichLink";

export namespace Hero {
  export const Presentation: React.FC = () => (
    <section
      css={[
        css`
          padding: 0rem;
        `,
        margin.x("auto"),
        container,
      ]}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          ${mediaQuery("sm")} {
            display: flex;
            flex-direction: row-reverse;
          }
          align-items: center;
          justify-content: space-around;
        `}
      >
        <Avatar />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
            width: 80%;
            ${mediaQuery("sm")} {
              text-align: left;
              width: auto;
            }
          `}
        >
          <h1
            css={css`
              font-size: 4rem;
              font-weight: 700;
              line-height: 1;
              margin-bottom: 0.25rem;
            `}
          >
            Aumy
          </h1>
          <div
            css={css`
              display: block;
              font-size: 1.25rem;
            `}
          >
            プログラミングがすきです．
          </div>
          <RichLink.IconColumn
            css={css`
              display: none;
              ${mediaQuery("sm")} {
                display: flex;
              }
            `}
          />
        </div>
      </div>
    </section>
  );
}
