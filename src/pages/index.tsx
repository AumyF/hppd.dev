import { css } from "@emotion/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { ArticleFeed } from "../components/Feed/Articles";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Index } from "../components/Index/Section";
import { RichLink } from "../components/RichLink";
import { Layout } from "../layouts/Default";
import { mediaQuery } from "../styles/screen";

export const IndexPage: React.FC = () => (
  <Layout.Presentation>
    <div css={css()}>
      <Hero.Presentation />
      <RichLink.IconRow
        css={css`
          margin-bottom: 2rem;
          ${mediaQuery("sm")} {
            display: none;
          }
        `}
      />
      <div
        css={css`
          margin: 0 auto 2rem;
          width: max-content;
        `}
      >
        <FontAwesomeIcon width={"32px"} icon={faChevronDown} />
      </div>
      <Index.Section id="interests">
        <h2>Works</h2>
        <code>Array []</code>
      </Index.Section>
      <Index.Section>
        <h2>Skills</h2>
        <Index.Skills.Component />
      </Index.Section>
      <Index.Section id="profile">
        <h2>Profile</h2>
        <p>
          2003年，横浜市うまれ．公立高に在学中．小5ぐらいのときにニコニコの動画を見ながら書いたVB
          (VBS) が最初のプログラミング．中学時代には Windows
          ラップトップをUbuntuとのデュアルブートにしたり，grub
          rescueと格闘したりした．高校に入ってからはTypeScriptとReactを学び，
          <abbr title="Functional Programming">FP</abbr>
          と静的型付けの信奉者になる．
        </p>
        <p>
          プログラミングそのものが好きなのであって，プロダクトやサービスや価値提供については正直あまり興味がないのだが，それではプログラマとして食っていくことができないので困っている．
        </p>
        <p>
          好き嫌いが激しい．食わず嫌いも激しい．古いものが嫌いなのは今だけなのか歳を重ねてからもそのままなのか気になる．
        </p>
      </Index.Section>
      <Index.Section>
        <h2>Posts</h2>
        <ArticleFeed.Container />
      </Index.Section>
      <Footer.Presentation />
    </div>
  </Layout.Presentation>
);

export default IndexPage;
