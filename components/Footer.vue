<template>
  <footer class="bg-gray-counterwhite text-gray-counterblack">
    <div class="container mx-auto px-8 py-4 text-center">
      <div>&copy; 2020 Aumy</div>
      <div class="">
        This website is built using
        <a href="https://nuxtjs.org">Nuxt.js</a> and deployed on
        <a href="https://netlify.com/">Netlify</a>. <br />Source code is
        available on
        <a href="https://github.com/aumyf/hppd.dev">GitHub</a> under the
        <a href="https://spdx.org.licenses/mit">MIT License</a>.
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Footer",
});
</script>

<style lang="postcss" scoped>
a {
  @apply text-fuchsia-counterblack;
}
</style>
