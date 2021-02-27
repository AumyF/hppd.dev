import { css, Global } from "@emotion/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Helmet } from "react-helmet";

import { Breadcrumbs } from "../components/Breadcrumbs";
import { Globals } from "./globalStyles";

config.autoAddCss = false;

export namespace Layout {
  export type Props = { path?: string };
  export const Presentation: React.FC<Props> = ({ children, path }) => (
    <div
      css={css`
        background-color: var(--color-background);
        color: var(--color-foreground);
        min-height: 100vh;
      `}
    >
      <Helmet htmlAttributes={{ lang: "ja" }}>
        <title>HappyPaddy</title>
      </Helmet>
      <Breadcrumbs path={path} />
      {children}
      <Global styles={Globals} />
    </div>
  );
}
