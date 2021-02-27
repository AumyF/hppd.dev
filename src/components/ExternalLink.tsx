import { css } from "@emotion/react";
import React from "react";

import { margin } from "../styles/layout";
import { mediaQuery } from "../styles/screen";
import { anchor } from "../styles/textColor";
import { ClassName } from "../types/props";
import { Link } from "./Link";

export type ExternalLinkProps = { href: string; label: string };

export const ExternalLink: React.FC<ExternalLinkProps & ClassName> = ({
  children,
  href,
  label,
}) => (
  <Link
    css={[
      css`
        display: flex;
        gap: 0.25rem;
        width: max-content;
        ${margin.x("auto")}
        ${mediaQuery("sm")} {
          ${margin.x("0")}
        }
        align-items: center;
      `,
      anchor,
    ]}
    to={href}
  >
    {children}
    {label}
  </Link>
);
