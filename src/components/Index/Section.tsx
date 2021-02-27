import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";

import { container, margin, padding } from "../../styles/layout";
export namespace Index {
  export const Section = styled.section([
    container,
    margin.x("auto"),
    padding.x("2rem"),
    padding.y("2rem"),
  ]);

  export namespace Skills {
    export const Skill = ["React", "TypeScript", "Linux"] as const;
    const skillNotes: { [_ in typeof Skill[number]]: string } = {
      Linux:
        "Debian系しかわからない．sedもawkも使えないので，各種コマンドはJSONを吐いてほしいと思っている．",
      React:
        "useState, useReducer以外のHooksの使い方がわかってない．クラスコンポーネントが書けない．",
      TypeScript: "型で遊ぶしかできない．クラスを使えない．",
    };
    export type Skill = typeof Skill[number] | null;
    export interface PresentationProps {
      onClick: (value: Skill) => void;
      showingSkill: Skill;
    }
    const Button = styled.button`
      background-color: transparent;
      border: 1px solid var(--color-border);
      color: currentColor;
      font-size: 1em;
      padding: 0.25rem 1rem;
      cursor: pointer;
      border-radius: 100vw;
    `;

    export const Component: React.VFC = () => {
      const [showingSkill, setShowingSkill] = useState<Skill | null>(null);

      return (
        <div>
          <div
            css={css`
              display: flex;
              gap: 1rem;
              margin-bottom: 1rem;
            `}
          >
            {Skill.map((skill) => (
              <Button
                key={skill}
                onClick={() =>
                  setShowingSkill((prev) => (prev === skill ? null : skill))
                }
              >
                {skill}
              </Button>
            ))}
          </div>
          <p>{showingSkill && <div>{skillNotes[showingSkill]}</div>}</p>
        </div>
      );
    };
  }
}
