import { css } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { mergeFeeds, NodeItem } from "../../helpers/mergeFeeds";
import { FeedItem } from "./Item";

export namespace ArticleFeed {
  export type PresentationProps = {
    sources: {
      readonly [_ in "Blog" | "Zenn"]: readonly {
        node: Readonly<Partial<NodeItem>>;
      }[];
    };
  };

  export const Presentation: React.FC<PresentationProps> = ({ sources }) => {
    const feed = mergeFeeds(sources);
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
        `}
      >
        {feed.map((item) => (
          <FeedItem.Presentation
            css={css`
              flex-grow: 1;
            `}
            key={item.link}
            {...item}
          />
        ))}
      </div>
    );
  };

  const useArticleFeed = () => {
    return useStaticQuery<GatsbyTypes.ArticleFeedQuery>(graphql`
      query ArticleFeed {
        allFeedBlog(sort: { fields: isoDate, order: DESC }) {
          totalCount
          edges {
            node {
              contentSnippet
              title
              link
              isoDate
            }
          }
        }

        allFeedZenn(sort: { fields: isoDate, order: DESC }) {
          totalCount
          edges {
            node {
              contentSnippet
              title
              link
              isoDate
            }
          }
        }
      }
    `);
  };

  export const Container: React.FC = () => {
    const { allFeedBlog, allFeedZenn } = useArticleFeed();

    return (
      <Presentation
        sources={{ Blog: allFeedBlog.edges, Zenn: allFeedZenn.edges }}
      />
    );
  };
}
