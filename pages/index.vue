<template>
  <div class="index-root bg-gray-900 text-gray-300">
    <Hero />
    <section id="interests" class="py-8">
      <div class="container mx-auto px-8">
        <h2>HOBBIES and INTERESTS</h2>
        <ul>
          <li>
            Web front-end programming
            <ul>
              <li>React</li>
              <li>TypeScript</li>
            </ul>
          </li>
          <li>Type system</li>
          <li>Functional programming</li>
          <li>Sans-serif fonts (e.g. Helvetica, 新ゴ, M+ 1c)</li>
          <li>Slab serif fonts (e.g. Roboto Slab, Zilla Slab, カクミン)</li>
          <li>Listening to rock music</li>
          <li>Games, anime and manga</li>
        </ul>
      </div>
    </section>
    <section id="profile" class="py-8">
      <div class="container mx-auto px-8">
        <h2>HISTORY and PROFILE</h2>
        <p>
          2003 年，横浜市で爆誕．公立小中を経て 2019 年 04
          月から公立高に在学中．小 5
          ぐらいのときにニコニコの動画を見ながら書いた VBS
          が最初のプログラミング． 中学時代には Windows ラップトップを Ubuntu
          とのデュアルブートにしたり，grub rescue
          と格闘したりした．高校に入ってからは TypeScript と React
          を学び，型システムの面白さを知る．
        </p>
        <p>静的型付け，関数型プログラミング．</p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

import Footer from "../components/Footer.vue";
import Hero from "../components/Hero.vue";

export default defineComponent({
  name: "App",
  components: { Footer, Hero },
  setup() {
    const icons = [
      {
        name: "logo-github",
        label: "aumyf",
        href: "https://github.com/aumyf",
      },
      {
        name: "logo-twitter",
        label: "aumy_f",
        href: "https://twitter.com/aumy_f",
      },
      {
        name: "newspaper-outline",
        label: "blog.hppd.dev",
        href: "https://blog.hppd.dev",
      },
    ];
    return {
      icons,
    };
  },
});
</script>

<style lang="postcss">
.index-root {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "ss01", "palt";
  ul {
    @apply list-disc pl-4;
  }
  h2 {
    @apply font-bold text-3xl tracking-tight mb-2 flex;
    &::after {
      @apply border-b border-gray-600 h-0 my-auto ml-4 flex-grow;
      content: "";
    }
  }
  h3 {
    @apply font-bold text-xl;
  }
  a {
    @apply no-underline;
    &:hover {
      @apply underline;
    }
  }

  p {
    @apply mb-2 text-justify text-justify-inter-character;
  }

  .ion {
    @apply fill-current my-auto;
  }

  ion-icon.chevron {
    @apply mx-auto;
  }
}

@layer components {
}
</style>
