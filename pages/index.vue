<template>
  <div class="index-root">
    <section class="bg-fuchsia-white text-gray-counterblack">
      <div class="container mx-auto px-8 py-8">
        <div
          class="block mx-auto sm:flex flex-row-reverse items-center justify-around mb-6"
        >
          <img src="/icon.png" class="h-48 mx-auto sm:mx-0" alt="" />
          <div class="text-center sm:text-left">
            <h1 class="text-6xl font-bold leading-none mb-2 tracking-tighter">
              Aumy
            </h1>
            <small class="block text-xl mb-2">A programmer.</small>
            <div class="w-48 mx-auto">
              <ExternalLink
                v-for="icon in icons"
                :key="icon.label"
                :icon="icon"
              />
              <a href="https://zenn.dev/aumy">Zenn: aumy</a>
            </div>
          </div>
        </div>

        <nav
          class="mb-8 flex flex-wrap gap-x-4 gap-y-1 tracking-widest justify-center"
        >
          <a href="#interests" class="flex gap-1"
            ><ion-icon name="heart-outline" />HOBBIES and INTERESTS</a
          >
          <a href="#profile" class="flex gap-1"
            ><ion-icon name="person-outline" />HISTORY and PROFILE</a
          >
        </nav>
        <div class="mx-auto w-max-content">
          <ion-icon name="chevron-down-outline" size="large" />
        </div>
      </div>
    </section>
    <section id="interests" class="bg-violet-white text-gray-counterblack">
      <div class="container mx-auto px-8 py-8">
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
    <section id="profile" class="bg-white text-gray-counterwhite">
      <div class="container mx-auto px-8 py-8">
        <h2>HISTORY and PROFILE</h2>
        <p>
          2003 年，横浜市で爆誕．公立小中を経て 2019 年 04
          月から公立高に在学中．小 5
          ぐらいのときにニコニコの動画を見ながら書いた VBS
          が最初のプログラミング． 中学時代には Windows ラップトップを Ubuntu
          とのデュアルブートにしたり，grub rescue
          と格闘したりした．高校に入ってからは TypeScript と React
          に打ち込んでいる．
        </p>
        <p>
          新しもの好きでかつ飽きやすいにもかかわらず，Twitter
          を控えることはできないようだ．
        </p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import ExternalLink from "../components/ExternalLink.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  name: "App",
  components: { ExternalLink },
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
    @apply font-bold text-3xl tracking-tight;
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
