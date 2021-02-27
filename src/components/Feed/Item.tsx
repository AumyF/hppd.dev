import { css } from "@emotion/react";
import React from "react";

import { panic } from "../../helpers/nullPanic";
import { anchor } from "../../styles/textColor";
import { ClassName } from "../../types/props";

export namespace FeedItem {
  export type Props = {
    contentSnippet: string;
    isoDate: string;
    link: string;
    title: string;
  };

  const faviconUrl = <S extends string>(hostname: S) =>
    `https://www.google.com/s2/favicons?domain=${hostname}` as const;

  export const Presentation: React.FC<Props & ClassName> = ({
    className,
    isoDate,
    link,
    title,
  }) => {
    // URL#hostname が '' の可能性があるが無視する
    const { hostname } = new URL(link);

    return (
      <article
        className={className}
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h2
          css={css`
            font-size: 1.2rem;
            line-height: 1.2;
            margin-bottom: 0;
          `}
        >
          <a
            href={link}
            css={[
              anchor,
              css`
                max-width: calc(100% - 2rem);
              `,
            ]}
          >
            {title}
          </a>
        </h2>
        <time>{isoDate.split("T")[0]}</time>

        <small
          css={css`
            display: flex;
            gap: 0.2rem;
            align-items: center;
            margin-top: auto;
            margin-bottom: 0;
          `}
        >
          <img src={faviconUrl(hostname)} width={16} height={16} />
          {hostname}
        </small>
      </article>
    );
  };

  export type ListProps = {
    readonly edges: readonly {
      readonly node: Partial<
        Readonly<{
          contentSnippet: string;
          isoDate: string;
          link: string;
          title: string;
        }>
      >;
    }[];
  };
  export const List: React.FC<ListProps> = ({ edges }) => {
    return (
      <>
        {edges.map(({ node }) => {
          let { contentSnippet, isoDate, link, title } = node;
          contentSnippet ??= panic({ contentSnippet });
          isoDate ??= panic({ isoDate });
          link ??= panic({ link });
          title ??= panic({ title });

          return (
            <Presentation
              key={link}
              {...{ contentSnippet, isoDate, link, title }}
            />
          );
        })}
      </>
    );
  };
}
