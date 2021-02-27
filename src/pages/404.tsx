import { css } from "@emotion/react";
import { PageProps } from "gatsby";

import { Layout } from "../layouts/Default";
import { container, margin } from "../styles/layout";

const _404: React.FC<PageProps> = () => (
  <Layout.Presentation path={""}>
    <div css={[margin.x("auto"), container]}>
      <h1
        css={css`
          text-align: center;
          font-size: 10vw;
        `}
      >
        Oops!
      </h1>
    </div>
  </Layout.Presentation>
);
export default _404;
