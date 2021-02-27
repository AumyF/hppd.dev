import { css } from "@emotion/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBlog, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { container, margin } from "../styles/layout";
import { mediaQuery, useScreen } from "../styles/screen";
import { anchor } from "../styles/textColor";
import { ClassName } from "../types/props";

const z: IconDefinition = {
  prefix: "fab",
  iconName: "zenn" as any,
  icon: [
    88.3,
    88.3,
    [],
    "e001",
    "M2.4 83.3h17c.9 0 1.7-.5 2.2-1.2L68.4 5.2c.6-1-.1-2.2-1.3-2.2H51c-.8 0-1.5.4-1.9 1.1L1.6 81.9c-.3.6.1 1.4.8 1.4zM61 82.1l22.1-35.5c.7-1.1-.1-2.5-1.4-2.5h-16c-.6 0-1.2.3-1.5.8L41.5 81.2c-.6.9.1 2.1 1.2 2.1H59c.8 0 1.6-.4 2-1.2z",
  ],
};

const s: IconDefinition = {
  prefix: "fab",
  iconName: "scrapbox" as any,
  icon: [
    40,
    40,
    [],
    "e002",
    "m 21.113741,0.88968846 c -0.615054,-0.32337204 -1.61068,-0.32409622 -2.227107,0 L 8.6276027,6.2839421 C 8.3291898,6.4409147 8.0579963,6.719375 7.8580972,7.0457811 L 18.133984,12.392863 c 0.243849,0.09352 0.45536,0.27881 0.581593,0.537768 0.07829,0.160568 0.114995,0.331625 0.114246,0.499935 7.49e-4,0.168185 -0.03596,0.339117 -0.114246,0.499685 -0.126233,0.258958 -0.337619,0.444248 -0.581468,0.537767 L 7.853852,19.817222 c 0.2001488,0.329004 0.4727157,0.610061 0.7737507,0.768257 l 10.7056503,5.629139 c 0.368335,0.193656 0.367586,0.50805 0,0.701332 L 8.6276027,32.545088 c -0.6149301,0.323384 -0.6163035,0.846918 0,1.171052 l 10.2590313,5.394153 c 0.615054,0.323385 1.610679,0.324134 2.227107,0 L 31.372523,33.71614 c 0.221249,-0.116369 0.427391,-0.299537 0.600695,-0.519413 L 21.908593,27.90246 C 21.53514,27.705933 21.321506,27.313376 21.325377,26.907835 v -0.0028 c -0.0039,-0.405542 0.209763,-0.798098 0.583216,-0.994626 L 32.288112,20.450662 C 32.087339,20.00991 31.752593,19.614357 31.372523,19.414582 L 20.667121,13.785415 c -0.368334,-0.193656 -0.367585,-0.508052 0,-0.701333 L 31.372523,7.4549437 c 0.614929,-0.3233846 0.616303,-0.8469055 0,-1.1710016 z M 32.485889,30.991344 v -8.170016 l -7.765848,4.085008 z M 15.381969,13.430441 7.514111,9.3363174 v 8.1881216 z",
  ],
};
library.add(z);

const icons = [
  {
    icon: faGithub,
    label: "GitHub",
    href: "https://github.com/aumyf",
  },
  {
    icon: faTwitter,
    label: "Twitter",
    href: "https://twitter.com/aumy_f",
  },
  {
    icon: faBlog,
    label: "::Blog",
    href: "https://blog.hppd.dev",
  },
  {
    icon: z,
    label: "Zenn",
    href: "https://zenn.dev/aumy",
  },
  {
    icon: s,
    label: "Scrapbox",
    href: "https://scrapbox.io/happy-paddy-nightly",
  },
] as const;

export namespace RichLink {
  export interface IconProps extends ClassName {
    readonly icons: readonly {
      readonly href: string;
      readonly icon: IconDefinition;
      readonly label: string;
    }[];
  }

  export const IconRow: React.FC<ClassName> = ({ className }) => (
    <div
      className={className}
      css={[
        container,
        anchor,
        css`
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          font-size: 1.5rem;
          padding-top: 0.5rem;
          max-width: 350px;
          margin: 0 auto;
        `,
      ]}
    >
      {icons.map(({ href, icon, label }) => (
        <a
          href={href}
          css={css`
            display: flex;
            align-items: center;
            gap: 0.25rem;
            width: min-content;
          `}
          key={href}
        >
          <FontAwesomeIcon icon={icon} />
          <span
            css={css`
              display: none;
            `}
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );

  export const IconColumn: React.FC<ClassName> = ({ className }) => (
    <div
      className={className}
      css={css`
        display: flex;
        ${anchor}
        ${mediaQuery("sm")} {
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 0rem;
        }
        ${container}
      `}
    >
      {icons.map(({ href, icon, label }) => (
        <a
          href={href}
          css={css`
            display: flex;
            align-items: center;
            gap: 0.25rem;
            width: min-content;
          `}
          key={href}
        >
          <FontAwesomeIcon icon={icon} />
          <span
            css={css`
              display: inline;
            `}
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );

  export interface Props {}
}
