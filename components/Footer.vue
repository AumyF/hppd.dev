<template>
  <footer class="bg-white text-gray-counterwhite">
    <div class="container mx-auto px-8 py-4 text-center">
      <div>&copy; 2020 Aumy</div>
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
