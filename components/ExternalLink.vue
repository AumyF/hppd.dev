<template>
  <a :href="icon.href" class="flex gap-1 w-max-content mx-auto sm:mx-0">
    <ion-icon :name="icon.name" />
    {{ icon.label }}</a
  >
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import type { PropType } from "@nuxtjs/composition-api";

export type icon = {
  name: string;
  label: string;
};

export default defineComponent({
  name: "ExternalLink",
  props: {
    icon: {
      type: Object as PropType<icon>,
      required: true,
    },
  },
});
</script>

<style>
ion-icon {
  @apply my-auto;
}
</style>
