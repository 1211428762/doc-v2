<template>
  <el-input
    :placeholder="placeholder"
    clearable
    v-bind="{ ...$attrs, ...props.config }"
  />
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "search-input",
  inheritAttrs: false,
  emits: ["change"],
  setup(props) {
    const placeholder = computed(() => {
      if (props.config.label) {
        return props.config.label as string;
      } else {
        return "common.pleaseInput";
      }
    });
    return {
      props,
      placeholder,
    };
  },
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
});
</script>
