<template>
  <el-select
    :placeholder="placeholder"
    clearable
    filterable
    :multiple="props.config.multiple || false"
    :collapse-tags="Boolean(props.config.multiple)"
    :collapse-tags-tooltip="
      Boolean(props.config['collapse-tags'] || props.config.multiple)
    "
    v-bind="{ ...$attrs, ...props.config }"
  >
    <el-option
      v-for="(item, index) in props.config.options"
      :disabled="item.disabled ?? false"
      :key="index"
      :value="item.value ?? item.dictValue"
      :label="$t(item.label ?? item.dictLabel) || ''"
    />
  </el-select>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "search-select",
  emits: ["change"],
  setup(props) {
    const placeholder = computed(() => {
      if (props.config.label) {
        return props.config.label as string;
      } else {
        return "common.pleaseSelect";
      }
    });
    return {
      placeholder,
      props,
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

<style lang="scss" scoped>
::v-deep(.el-input__wrapper) {
  --el-input-bg-color: #e6effb;
  --el-input-border-color: #d3d9e7;
  --el-input-text-color: #151925;
}

::v-deep(.el-input__inner::placeholder) {
  --el-input-text-color: #8b9aaf;
}
</style>
