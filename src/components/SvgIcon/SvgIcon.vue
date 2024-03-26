<script setup>
import { defineAsyncComponent } from "vue";
const props = defineProps({
  name: { type: String, default: "" },
});

const svgModules = import.meta.glob("@/assets/images/svg/**/*.svg", {
  query: "?component",
});

const SvgComponent = defineAsyncComponent(
  svgModules[`/src/assets/images/svg/${props.name}.svg`]
);
</script>

<template>
  <SvgComponent />
</template>

<style lang="" scoped></style>
