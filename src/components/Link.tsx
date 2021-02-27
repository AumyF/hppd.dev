// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links

import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export const Link: React.FC<GatsbyLinkProps<unknown>> = ({
  activeClassName,
  children,
  partiallyActive,
  to,
  ...other
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={other.ref as any}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};
