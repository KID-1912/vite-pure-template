import { defineComponent, defineAsyncComponent, h } from "vue";

const svgModules = import.meta.glob("./**/*.svg", {
  query: "?component",
});

export default defineComponent({
  name: "SvgIcon",
  props: {
    name: { type: String, default: "" },
  },
  setup(props) {
    const SvgComponent = defineAsyncComponent(
      svgModules[`/src/assets/images/svg/${props.name}.svg`]
    );
    return () => h(SvgComponent);
  },
});
