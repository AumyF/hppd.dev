// import { chakra, Container, Link } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { container, margin, padding } from "../styles/layout";
import { Link } from "./Link";

export type BreadcrumbsProps = {
  path?: string;
};

const Slash = (
  <span
    css={css`
      user-select: none;
      ${margin.x(".25rem")}
    `}
  >
    /
  </span>
);

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path }) => {
  return (
    <nav css={[padding.y(".25rem")]}>
      <div
        css={[
          container,
          css`
            ${padding.x("1rem")}
          `,
        ]}
      >
        <Link to="/">hppd.dev</Link>
        {path && (
          <>
            {Slash}
            <Link to={`/${path}`}>{path}</Link>
          </>
        )}

        <FontAwesomeIcon
          css={css`
            margin-left: 0.25rem;
          `}
          icon={faChevronRight}
        />
      </div>
    </nav>
  );
};
