<template>
  <section class="">
    <div class="container mx-auto px-8 my-8">
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
            <a
              class="flex gap-1 w-max-content mx-auto sm:mx-0 items-center"
              href="https://zenn.dev/aumy"
              ><ZennLogo /> aumy</a
            >
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
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

import ExternalLink from "./ExternalLink.vue";
import ZennLogo from "./ZennLogo.vue";

export default defineComponent({
  components: { ExternalLink, ZennLogo },
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
